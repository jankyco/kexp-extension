define([
  "jquery",
  "underscore",
  "services/Service",
  "models/LikedSongModel",
  "moment"
  ], function($, _, Service, LikedSongModel) {

  var LastFmLikeSyncService = Service.extend({
    onStart: function() {
      this.lastFmConfig = this.appConfig.getLastFm();
      
      if (this.lastFmConfig.isLikeShareEnabled() || this.lastFmConfig.isLikeScrobbleEnabled()) {
        console.debug("Enabling Last.fm Sync Service...");
        this._api = this.lastFmConfig.getApi();
        this.pipeToVent(this._api, "all");
        this.bindTo(this.vent, "nowplaying:like", this.handleSync, this);
      }
    },
    handleSync: function(nowPlayingModel) {
      
      if (_.isUndefined(nowPlayingModel)) return;

      console.debug("[LastFmLikeSyncService] processing nowplaying:like event for song {%s}",
        nowPlayingModel.toDebugString(), nowPlayingModel);
    
      var likedSong = nowPlayingModel.getLikedSong();
      if (_.isUndefined(likedSong)) return;
      
      var self = this,
        track = likedSong.get("songTitle"),
        artist = likedSong.get("artist"),
        album = likedSong.get("album"),
        timePlayed = nowPlayingModel.get("timePlayed");


      if (_.isEmpty(track) || _.isEmpty(artist)) return;


      if (this.lastFmConfig.isLikeShareEnabled() &&
        !likedSong.hasLastFmShareStatus(LikedSongModel.LastFmShareStatus.TrackLove)) {
        
        this._api.loveTrack(track, artist).then(
          function() {
            likedSong.setLastFmShareStatus(LikedSongModel.LastFmShareStatus.TrackLove);
            likedSong.save();
            self.vent.trigger("lastfm:track:love:success", likedSong);
          },
          function(resp, error, options) {
            console.warn("[LastFmLikeSyncService Error] %s track.love %s", resp.message, nowPlayingModel.toDebugString(), resp, options);
            self.vent.trigger("lastfm:track:love:fail", resp, likedSong, options);
          }
        );
      }

      if (this.lastFmConfig.isLikeScrobbleEnabled() && !_.isEmpty(album)) {
        this._api.scrobbleTrack(track, artist, album, false, timePlayed)
          .then(
            function() {
              likedSong.scrobble();
              likedSong.save();
              self.vent.trigger("lastfm:track:scrobble:success", likedSong);
            },
            function(resp, error, options) {
              console.warn("[LastFmLikeSyncService Error] %s track.scrobble %s", resp.message, nowPlayingModel.toDebugString(), resp, options);
              self.vent.trigger("lastfm:track:scrobble:fail", resp, likedSong, options);
            }
          );
      }
    }
  });
  return LastFmLikeSyncService;
});