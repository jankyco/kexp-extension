define([
  "jquery",
  "underscore",
  "services/Service"
  ], function($, _, Service) {

    var FeatureManagerService = Service.extend({
      onStart: function(options) {
        
        this.featuresConfig = this.appConfig.getFeatures();
        if (!this.featuresConfig.get("hasClickedLike")) {
          this.handleLikeBinding = this.bindTo(this.vent, "nowplaying:like", this.handleLike, this);
        }

        this.bindTo(this.vent, "lastfm:api:error:sessionkey:invalid", this.handleInvalidSessionKey, this);
        this.bindTo(this.vent, "lastfm:track:love:fail", this.handleLoveFail, this);
        this.bindTo(this.vent, "lastfm:track:scrobble:fail", this.handleScrobbleFail, this);
      },
      handleLike: function() {
        if (!this.featuresConfig.get("hasClickedLike")) {
          this.vent.trigger("notification:info", "Enable sharing in options", "Share your \"likes\" with your Last.fm profile!");
          this.featuresConfig.set({hasClickedLike: true});
        }
        
        if (this.handleLikeBinding) {
          this.vent.unbindFrom(this.handleLikeBinding);
          delete this.handleLikeBinding;
        }
      },
      handleInvalidSessionKey: function(sessionKey, options) {
        console.warn("LastFM API SessionKey {%s} is revoked!", sessionKey, options);

        this.appConfig.getLastFm().disableAuthorization();
        this.vent.trigger("notification:warning",
          "Extension is no longer authorized to access your Last.fm profile.",
          "Last.fm Authorization Disabled!");
      },
      handleLoveFail: function(resp) {
        this.vent.trigger("notification:error",
          'Last.fm error "' + resp.message + '"',
          "Unable to share like to your Last.fm profile!");
      },
      handleScrobbleFail: function(resp) {
        this.vent.trigger("notification:error",
          'Last.fm error "' + resp.message + '"',
          "Unable to scrobble like to your Last.fm profile!");
      }
    });

    return FeatureManagerService;
});