define(["collections/LastFmCollection"], function(LastFmCollection) {

  describe("LastFmCollection", function() {

    var ARTIST_RESPONSE = {"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse","image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/886281.jpg","size":"small"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/886281.jpg","size":"medium"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/886281.jpg","size":"large"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/886281.jpg","size":"extralarge"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/500\/886281\/Modest+Mouse.jpg","size":"mega"}],"streamable":"1","stats":{"listeners":"1889423","playcount":"93945513"},"similar":{"artist":[{"name":"Ugly Casanova","url":"http:\/\/www.last.fm\/music\/Ugly+Casanova","image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/44454.jpg","size":"small"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/44454.jpg","size":"medium"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/44454.jpg","size":"large"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/44454.jpg","size":"extralarge"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/500\/44454\/Ugly+Casanova.jpg","size":"mega"}]},{"name":"Built To Spill","url":"http:\/\/www.last.fm\/music\/Built+To+Spill","image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/47893829.jpg","size":"small"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/47893829.jpg","size":"medium"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/47893829.jpg","size":"large"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/47893829.jpg","size":"extralarge"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/500\/47893829\/Built+To+Spill+Graham+M+003_1mb.jpg","size":"mega"}]},{"name":"Neutral Milk Hotel","url":"http:\/\/www.last.fm\/music\/Neutral+Milk+Hotel","image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/2727.jpg","size":"small"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/2727.jpg","size":"medium"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/2727.jpg","size":"large"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/2727.jpg","size":"extralarge"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/500\/2727\/Neutral+Milk+Hotel.jpg","size":"mega"}]},{"name":"Andrew Jackson Jihad","url":"http:\/\/www.last.fm\/music\/Andrew+Jackson+Jihad","image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/25974659.jpg","size":"small"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/25974659.jpg","size":"medium"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/25974659.jpg","size":"large"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/25974659.jpg","size":"extralarge"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/_\/25974659\/Andrew+Jackson+Jihad+ajj.jpg","size":"mega"}]},{"name":"Animal Collective","url":"http:\/\/www.last.fm\/music\/Animal+Collective","image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34\/54319533.png","size":"small"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64\/54319533.png","size":"medium"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/126\/54319533.png","size":"large"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/252\/54319533.png","size":"extralarge"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/500\/54319533\/Animal+Collective+untitled.png","size":"mega"}]}]},"tags":{"tag":[{"name":"indie","url":"http:\/\/www.last.fm\/tag\/indie"},{"name":"indie rock","url":"http:\/\/www.last.fm\/tag\/indie%20rock"},{"name":"alternative","url":"http:\/\/www.last.fm\/tag\/alternative"},{"name":"rock","url":"http:\/\/www.last.fm\/tag\/rock"},{"name":"alternative rock","url":"http:\/\/www.last.fm\/tag\/alternative%20rock"}]},"bio":{"published":"Wed, 17 Aug 2011 20:09:07 +0000","summary":"<a href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\" class=\"bbcode_artist\">Modest Mouse<\/a> is an <a href=\"http:\/\/www.last.fm\/tag\/alternative%20rock\" class=\"bbcode_tag\" rel=\"tag\">alternative rock<\/a> band which formed in 1993 in Issaquah, Washington, United States. The band's original lineup consisted of guitarist <a href=\"http:\/\/www.last.fm\/music\/Isaac+Brock\" class=\"bbcode_artist\">Isaac Brock<\/a>, drummer <a href=\"http:\/\/www.last.fm\/music\/Jeremiah+Green\" class=\"bbcode_artist\">Jeremiah Green<\/a> and bassist <a href=\"http:\/\/www.last.fm\/music\/Eric+Judy\" class=\"bbcode_artist\">Eric Judy<\/a>. Since being signed to Sony's Epic Records in 2000, Modest Mouse has attained significant popular success with songs such as &quot;<a title=\"Modest Mouse &ndash; Float On\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Float+On\" class=\"bbcode_track\">Float On<\/a>&quot; and &quot;<a title=\"Modest Mouse &ndash; Dashboard\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Dashboard\" class=\"bbcode_track\">Dashboard<\/a>.&quot;  The band's current configuration is Isaac Brock (vocals, guitar), Tom Peloso (strings, horns, bass, keyboards), Jim Fairchild (guitar), Eric Judy (bass), Jeremiah Green (drums) and Joe Plummer (drums).","content":"<a href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\" class=\"bbcode_artist\">Modest Mouse<\/a> is an <a href=\"http:\/\/www.last.fm\/tag\/alternative%20rock\" class=\"bbcode_tag\" rel=\"tag\">alternative rock<\/a> band which formed in 1993 in Issaquah, Washington, United States. The band's original lineup consisted of guitarist <a href=\"http:\/\/www.last.fm\/music\/Isaac+Brock\" class=\"bbcode_artist\">Isaac Brock<\/a>, drummer <a href=\"http:\/\/www.last.fm\/music\/Jeremiah+Green\" class=\"bbcode_artist\">Jeremiah Green<\/a> and bassist <a href=\"http:\/\/www.last.fm\/music\/Eric+Judy\" class=\"bbcode_artist\">Eric Judy<\/a>. Since being signed to Sony's Epic Records in 2000, Modest Mouse has attained significant popular success with songs such as &quot;<a title=\"Modest Mouse &ndash; Float On\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Float+On\" class=\"bbcode_track\">Float On<\/a>&quot; and &quot;<a title=\"Modest Mouse &ndash; Dashboard\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Dashboard\" class=\"bbcode_track\">Dashboard<\/a>.&quot;\n \n The band's current configuration is Isaac Brock (vocals, guitar), Tom Peloso (strings, horns, bass, keyboards), Jim Fairchild (guitar), Eric Judy (bass), Jeremiah Green (drums) and Joe Plummer (drums). Plummer has recently become the new drummer for <a href=\"http:\/\/www.last.fm\/music\/The+Shins\" class=\"bbcode_artist\">The Shins<\/a>.\n \n Brock came up with the name &quot;Modest Mouse&quot; when he read the <a href=\"http:\/\/en.wikipedia.org\/wiki\/Virginia_Woolf\" rel=\"nofollow\">Virginia Woolf<\/a> stream of consciousness essay <a href=\"http:\/\/www.bartleby.com\/85\/8.html\" rel=\"nofollow\">The Mark On the Wall<\/a> in which the author described the working middle class as &quot;modest mouse-coloured people&quot;\n \n Brock frequently moved around with his mother when he was a child. Around this time, his mother left his father for his father's brother (Brock's uncle). Brock's mother's house flooded and forced them to move into his mother's new husband's trailer, but there was no room for Brock. Brock stayed behind, living in the second story of the flooded house, until he was eventually evicted by police. He then moved into a shed next to his mother's house and it is said this is where Brock, drummer <a href=\"http:\/\/www.last.fm\/music\/Jeremiah+Green\" class=\"bbcode_artist\">Jeremiah Green<\/a> and bassist Eric Judy first began playing music.\n \n In 1994, the band recorded their debut EP, <em><a title=\"Modest Mouse - Blue Cadet-3, Do You Connect?\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/Blue+Cadet-3,+Do+You+Connect%3F\" class=\"bbcode_album\">Blue Cadet-3, Do You Connect?<\/a><\/em>, at <a href=\"http:\/\/www.last.fm\/music\/Calvin+Johnson\" class=\"bbcode_artist\">Calvin Johnson<\/a>'s Dub Narcotic Studios, which was then released on Calvin's record label <a href=\"http:\/\/www.kpunk.com\/\" rel=\"nofollow\">K Records<\/a>. Then followed a single with <a href=\"http:\/\/www.subpop.com\/\" rel=\"nofollow\">Sub Pop<\/a> that was recorded by producer Steve Wold at Moon Studios. Wold, who in the mid-2000's would begin to perform under the name <a href=\"http:\/\/www.last.fm\/music\/Seasick+Steve\" class=\"bbcode_artist\">Seasick Steve<\/a>, would also perform on the band's albums, but was never an official member of the band. After moving to <a href=\"http:\/\/www.uprecords.com\/\" rel=\"nofollow\">Up Records<\/a> Modest Mouse put out several releases recorded at Moon Studios, including 1996's <em><a title=\"Modest Mouse - This Is a Long Drive for Someone with Nothing to Think About\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/This+Is+a+Long+Drive+for+Someone+with+Nothing+to+Think+About\" class=\"bbcode_album\">This Is a Long Drive for Someone with Nothing to Think About<\/a><\/em>. This double LP was produced and recorded by Steve Wold. The next offering on UP was <em><a title=\"Modest Mouse - Interstate 8\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/Interstate+8\" class=\"bbcode_album\">Interstate 8<\/a><\/em>; also produced by Steve Wold. 1997's <em><a title=\"Modest Mouse - The Lonesome Crowded West\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/The+Lonesome+Crowded+West\" class=\"bbcode_album\">The Lonesome Crowded West<\/a><\/em>, (also recorded at Moon Studios, by Scott Swayze) turned out to be the band's breakthrough album. <em>The Lonesome Crowded West<\/em> gained the band a cult following and is now widely considered by many critics to be one of the defining albums of mid-<a href=\"http:\/\/www.last.fm\/tag\/90s\" class=\"bbcode_tag\" rel=\"tag\">90s<\/a> indie rock.\n \n In 2000, Modest Mouse released <em><a title=\"Modest Mouse - The Moon and Antarctica\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/The+Moon+and+Antarctica\" class=\"bbcode_album\">The Moon and Antarctica<\/a><\/em>, their first album on a major label (<a href=\"http:\/\/www.epicrecords.com\/\" rel=\"nofollow\">Epic Records<\/a>). The band enjoyed some success on <a href=\"http:\/\/www.last.fm\/tag\/alternative\" class=\"bbcode_tag\" rel=\"tag\">alternative<\/a> radio with the singles &quot;<a title=\"Modest Mouse &ndash; 3rd Planet\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/3rd+Planet\" class=\"bbcode_track\">3rd Planet<\/a>&quot; and &quot;<a title=\"Modest Mouse &ndash; Gravity Rides Everything\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Gravity+Rides+Everything\" class=\"bbcode_track\">Gravity Rides Everything<\/a>.&quot; Lead singer Isaac Brock has since put out an album with his side project <a href=\"http:\/\/www.last.fm\/music\/Ugly+Casanova\" class=\"bbcode_artist\">Ugly Casanova<\/a> on <a href=\"http:\/\/www.last.fm\/label\/Sub+Pop+Records\" class=\"bbcode_label\">Sub Pop Records<\/a>. \n \n In 2003, drummer Jeremiah Green quit the band; the official word was that he was quitting to work with his side project, <a href=\"http:\/\/www.last.fm\/music\/Vells\" class=\"bbcode_artist\">Vells<\/a>. He was replaced with two members, drummer Benjamin Weikel (who also drummed for <a href=\"http:\/\/www.last.fm\/music\/The+Helio+Sequence\" class=\"bbcode_artist\">The Helio Sequence<\/a>) and guitarist Dann Gallucci (<a href=\"http:\/\/www.last.fm\/music\/Murder+City+Devils\" class=\"bbcode_artist\">Murder City Devils<\/a>).  Weikel being new to the band and Gallucci returning to the band for the first time since This is a Long Drive for Someone with Nothing to Think About. On April 6, 2004, Modest Mouse released the platinum-selling <em><a title=\"Modest Mouse - Good News For People Who Love Bad News\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/Good+News+For+People+Who+Love+Bad+News\" class=\"bbcode_album\">Good News For People Who Love Bad News<\/a><\/em>, which scored two hits with &quot;<a title=\"Modest Mouse &ndash; Float On\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Float+On\" class=\"bbcode_track\">Float On<\/a>&quot; and &quot;<a title=\"Modest Mouse &ndash; Ocean Breathes Salty\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Ocean+Breathes+Salty\" class=\"bbcode_track\">Ocean Breathes Salty<\/a>&quot;. In 2004 Jeremiah Green returned to the band, and Benjamin Weikel now drums exclusively for The Helio Sequence. Dann Gallucci left the band in August, and they toured with <a href=\"http:\/\/www.last.fm\/music\/Hutch+Harris\" class=\"bbcode_artist\">Hutch Harris<\/a> of <a href=\"http:\/\/www.last.fm\/music\/The+Thermals\" class=\"bbcode_artist\">The Thermals<\/a> during the fall of 2004.\n \n Modest Mouse was mentioned by name in the 2005 Supreme Court decision in the case of MGM v. Grokster. Justice Souter wrote that on the Grokster P2P network, &quot;Users seeking Top 40 songs, for example, or the latest release by Modest Mouse, are certain to be far more numerous than those seeking a free Decameron, and Grokster and StreamCast translated that demand into dollars.&quot;\n \n In 2005, multi-instrumentalist Tom Peloso, who already played various instruments on Good News For People Who Love Bad News, officially joined the band. In 2006,  <a href=\"http:\/\/www.last.fm\/music\/Johnny+Marr\" class=\"bbcode_artist\">Johnny Marr<\/a>, former guitarist for <a href=\"http:\/\/www.last.fm\/music\/The+Smiths\" class=\"bbcode_artist\">The Smiths<\/a>, became an official member of the band.\n \n On March 20, 2007, the band released their fifth album, <em><a title=\"Modest Mouse - We Were Dead Before The Ship Even Sank\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/We+Were+Dead+Before+The+Ship+Even+Sank\" class=\"bbcode_album\">We Were Dead Before The Ship Even Sank<\/a><\/em>. Four singles were released from the album: &quot;Dashboard&quot;, &quot;Missed the Boat&quot;, &quot;We've Got Everything&quot; and &quot;Little Motel&quot;. The album debuted at #1 on the Billboard 200 album chart. <a href=\"http:\/\/www.last.fm\/music\/James+Mercer\" class=\"bbcode_artist\">James Mercer<\/a> of <a href=\"http:\/\/www.last.fm\/music\/The+Shins\" class=\"bbcode_artist\">The Shins<\/a> provides backing vocals on three songs.\n \n In 2009, they released <a title=\"Modest Mouse - No One's First and You're Next\" href=\"http:\/\/www.last.fm\/music\/Modest+Mouse\/No+One's+First+and+You're+Next\" class=\"bbcode_album\">No One's First and You're Next<\/a>, an EP of unreleased songs from around the time Good News and We Were Dead were recorded, and two songs that had already been released, &quot;I've Got It All (Most)&quot; and &quot;King Rat&quot;. The video for King Rat was directed by late actor Heath Ledger.\n \n In 2009, Johnny Marr left the band and was replaced by Jim Fairchild, formerly of <a href=\"http:\/\/www.last.fm\/music\/Grandaddy\" class=\"bbcode_artist\">Grandaddy<\/a>. The band performed at several festivals throughout 2009 and 2010, including the main stage of the Reading and Leeds Festivals in 2010. The band is currently recording their sixth album.\n    \nUser-contributed text is available under the Creative Commons By-SA License and may also be available under the GNU FDL."}}};
    var ALBUM_RESPONSE = {"album":{"name":"The Lonesome Crowded West","artist":"Modest Mouse","id":"2025359","mbid":"1e67116d-3ad1-32ef-bf15-fb8e5b96e06c","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/The+Lonesome+Crowded+West","releasedate":"    ","image":[{"#text":"http:\/\/userserve-ak.last.fm\/serve\/34s\/65775598.png","size":"small"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/64s\/65775598.png","size":"medium"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/174s\/65775598.png","size":"large"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/300x300\/65775598.png","size":"extralarge"},{"#text":"http:\/\/userserve-ak.last.fm\/serve\/_\/65775598\/The+Lonesome+Crowded+West+modest+mouse.png","size":"mega"}],"listeners":"177314","playcount":"5331105","tracks":{"track":[{"name":"Teeth Like God's Shoeshine","duration":"414","mbid":"0764d5fc-e571-47cc-8917-cf55ff7f4de3","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Teeth+Like+God's+Shoeshine","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"1"}},{"name":"Heart Cooks Brain","duration":"243","mbid":"3e6f056d-170e-4ef3-b267-9f0dbad27f0a","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Heart+Cooks+Brain","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"2"}},{"name":"Convenient Parking","duration":"248","mbid":"516d3ecd-150f-45f3-93d0-fe9dd96ecd7a","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Convenient+Parking","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"3"}},{"name":"Lounge (Closing Time)","duration":"425","mbid":"33a96bd1-264a-4674-ab89-ed5936ecdb80","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Lounge+(Closing+Time)","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"4"}},{"name":"Jesus Christ Was an Only Child","duration":"156","mbid":"107dd207-d2fb-47f3-ad62-762117d7235f","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Jesus+Christ+Was+an+Only+Child","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"5"}},{"name":"Doin' the Cockroach","duration":"448","mbid":"0aa30513-218e-47e8-a242-4dc9eb943c91","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Doin'+the+Cockroach","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"6"}},{"name":"Cowboy Dan","duration":"375","mbid":"1e105e3d-3ad6-4768-aa75-a99894180afb","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Cowboy+Dan","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"7"}},{"name":"Trailer Trash","duration":"347","mbid":"01f334f2-a3f2-4efe-8645-be55375ee7b8","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Trailer+Trash","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"8"}},{"name":"Out of Gas","duration":"151","mbid":"00b2577e-f22f-410a-ade2-8949621c5851","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Out+of+Gas","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"9"}},{"name":"Long Distance Drunk","duration":"223","mbid":"6f55c927-cf15-42ab-9159-7325c313bf75","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Long+Distance+Drunk","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"10"}},{"name":"Shit Luck","duration":"142","mbid":"8da4d24b-b985-4d31-9285-1ee7bc149beb","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Shit+Luck","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"11"}},{"name":"Truckers Atlas","duration":"659","mbid":"cfc22d47-4ffc-4093-a468-18b32ea947d1","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Truckers+Atlas","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"12"}},{"name":"Polar Opposites","duration":"210","mbid":"22e4012c-1e0c-4a1a-bb6a-09eecb7e26b6","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Polar+Opposites","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"13"}},{"name":"Bankrupt on Selling","duration":"183","mbid":"1f2d6eee-3f55-4f48-a794-ac13e746006e","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Bankrupt+on+Selling","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"14"}},{"name":"Styrofoam Boots \/ It's All Nice On Ice, Alright","duration":"","mbid":"ab56d729-5edc-42e0-b798-75c6bb9865a1","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Styrofoam+Boots+%2F+It's+All+Nice+On+Ice,+Alright","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"15"}},{"name":"Teeth Like God\u2019s Shoeshine","duration":"","mbid":"203174a0-8173-4a5f-bc6a-40cb11af85ec","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Teeth+Like+God%E2%80%99s+Shoeshine","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"16"}},{"name":"Doin\u2019 The Cockroach","duration":"258","mbid":"0c9b1293-2f8b-41e1-8f7e-0b18cff3b63d","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Doin%E2%80%99+The+Cockroach","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"17"}},{"name":"Styrofoam Boots \/ It\u2019s All Nice On Ice, Alright","duration":"413","mbid":"87e1d011-2f9b-4610-8840-c30509a767dc","url":"http:\/\/www.last.fm\/music\/Modest+Mouse\/_\/Styrofoam+Boots+%2F+It%E2%80%99s+All+Nice+On+Ice,+Alright","streamable":{"#text":"0","fulltrack":"0"},"artist":{"name":"Modest Mouse","mbid":"a96ac800-bfcb-412a-8a63-0a98df600700","url":"http:\/\/www.last.fm\/music\/Modest+Mouse"},"@attr":{"rank":"18"}}]},"toptags":{"tag":[{"name":"albums i own","url":"http:\/\/www.last.fm\/tag\/albums%20i%20own"},{"name":"favorite albums","url":"http:\/\/www.last.fm\/tag\/favorite%20albums"},{"name":"indie rock","url":"http:\/\/www.last.fm\/tag\/indie%20rock"},{"name":"rock","url":"http:\/\/www.last.fm\/tag\/rock"},{"name":"indie","url":"http:\/\/www.last.fm\/tag\/indie"}]},"wiki":{"published":"Sat, 7 Apr 2012 04:31:34 +0000","summary":"The Lonesome Crowded West is the third album recorded by indie rock band Modest Mouse (the secound released, but Sad Sappy Sucker was recorded before T.L.C.W. and T.iaL.D.fS.wN.tT.A.  The album was released on Up Records on November 18, 1997, on both compact disc and vinyl LP.  Many consider the album to be one of the best indie rock albums of the 90s: Pitchfork Media ranked it #29 in their list 100 Greatest Albums of the 1990s, and the song &quot;Trailer Trash&quot; number 63 in their list of the 200 Greatest Songs of the decade.","content":"The Lonesome Crowded West is the third album recorded by indie rock band Modest Mouse (the secound released, but Sad Sappy Sucker was recorded before T.L.C.W. and T.iaL.D.fS.wN.tT.A.\n \n The album was released on Up Records on November 18, 1997, on both compact disc and vinyl LP.\n \n Many consider the album to be one of the best indie rock albums of the 90s: Pitchfork Media ranked it #29 in their list 100 Greatest Albums of the 1990s, and the song &quot;Trailer Trash&quot; number 63 in their list of the 200 Greatest Songs of the decade. Spin ranked it #59 in their list the 100 Greatest Albums, 1985\u20132005, and Entertainment Weekly included the album in their list The Indie Rock 25. The A.V. Club has described the album as the band's breakthrough recording.\n \n The two towers that adorn the album's cover are The Westin Seattle.\n        \nUser-contributed text is available under the Creative Commons By-SA License and may also be available under the GNU FDL."}}};
   
    describe("#getImageBySort", function() {
      
      beforeEach(function(){

        this.collection = new LastFmCollection();
      });

      it("should return extralarge artist image when extralarge is specified as artist only sort", function() {
        var artistResp = {
            "artist": {
              "image": [
                {"#text": "http://userserve-ak.last.fm/serve/126/886281.jpg","size": "large"},
                {"#text": "http://userserve-ak.last.fm/serve/252/886281.jpg","size": "extralarge"},
                {"#text": "http://userserve-ak.last.fm/serve/500/886281/Modest+Mouse.jpg","size": "mega"}
              ]
            }
          },
          sortList = [{entity: "artist", imageSort: ["extralarge", "large", "medium", "small"]}],
          result;

        this.collection.add(artistResp, {parse: true});

        result = this.collection.getImageBySort(sortList);
        result.should.have.property("image");
        result.image.size.should.equal("extralarge");
        result.image.url.should.not.be.empty;

      });

      it("should return undefined artist image when medium is specified as artist only sort", function() {
        var artistResp = {
            "artist": {
              "image": [
                {"#text": "http://userserve-ak.last.fm/serve/126/886281.jpg","size": "large"},
                {"#text": "http://userserve-ak.last.fm/serve/252/886281.jpg","size": "extralarge"},
                {"#text": "http://userserve-ak.last.fm/serve/500/886281/Modest+Mouse.jpg","size": "mega"}
              ]
            }
          },
          sortList = [{entity: "artist", imageSort: ["medium", "small"]}],
          result;

        this.collection.add(artistResp, {parse: true});

        result = this.collection.getImageBySort(sortList);
        expect(result).to.not.exist;

      });


      it("should return extralarge album image when extralarge is specified as album only sort", function() {
        var albumResp = {
            "album": {
              "image": [
                {"#text": "http://userserve-ak.last.fm/serve/126/886281.jpg","size": "large"},
                {"#text": "http://userserve-ak.last.fm/serve/252/886281.jpg","size": "extralarge"},
                {"#text": "http://userserve-ak.last.fm/serve/500/886281/Modest+Mouse.jpg","size": "mega"}
              ]
            }
          },
          sortList = [{entity: "album", imageSort: ["extralarge", "large", "medium", "small"]}],
          result;

        this.collection.add(albumResp, {parse: true});

        result = this.collection.getImageBySort(sortList);
        result.should.have.property("image");
        result.image.size.should.equal("extralarge");
        result.image.url.should.not.be.empty;

      });

      it("should return undefined album image when medium is specified as album only sort", function() {
        var albumResp = {
            "album": {
              "image": [
                {"#text": "http://userserve-ak.last.fm/serve/126/886281.jpg","size": "large"},
                {"#text": "http://userserve-ak.last.fm/serve/252/886281.jpg","size": "extralarge"},
                {"#text": "http://userserve-ak.last.fm/serve/500/886281/Modest+Mouse.jpg","size": "mega"}
              ]
            }
          },
          sortList = [{entity: "album", imageSort: ["medium", "small"]}],
          result;

        this.collection.add(albumResp, {parse: true});

        result = this.collection.getImageBySort(sortList);
        expect(result).to.not.exist;

      });

      it("should return undefined artist image when artist only sort is specified with possible album match", function() {
        var artistResp = {
            "artist": {
              "image": [
                {"#text": "http://userserve-ak.last.fm/serve/126/886281.jpg","size": "large"},
                {"#text": "http://userserve-ak.last.fm/serve/252/886281.jpg","size": "extralarge"},
                {"#text": "http://userserve-ak.last.fm/serve/500/886281/Modest+Mouse.jpg","size": "mega"}
              ]
            }
          },
          albumResp = {
            "album": {
              "image": [
                {"#text": "http://userserve-ak.last.fm/serve/126/886281.jpg","size": "small"},
                {"#text": "http://userserve-ak.last.fm/serve/252/886281.jpg","size": "medium"},
                {"#text": "http://userserve-ak.last.fm/serve/500/886281/Modest+Mouse.jpg","size": "large"}
              ]
            }
          },
          sortList = [{entity: "artist", imageSort: ["medium", "small"]}],
          result;

        this.collection.add(artistResp, {parse: true});
        this.collection.add(albumResp, {parse: true});

        result = this.collection.getImageBySort(sortList);
        expect(result).to.not.exist;

      });

      it("should return undefined album image when album only sort is specified with possible artist match", function() {
        var artistResp = {
            "artist": {
              "image": [
                {"#text": "http://userserve-ak.last.fm/serve/126/886281.jpg","size": "large"},
                {"#text": "http://userserve-ak.last.fm/serve/252/886281.jpg","size": "extralarge"},
                {"#text": "http://userserve-ak.last.fm/serve/500/886281/Modest+Mouse.jpg","size": "mega"}
              ]
            }
          },
          albumResp = {
            "album": {
              "image": [
                {"#text": "http://userserve-ak.last.fm/serve/126/886281.jpg","size": "small"},
                {"#text": "http://userserve-ak.last.fm/serve/252/886281.jpg","size": "medium"},
                {"#text": "http://userserve-ak.last.fm/serve/500/886281/Modest+Mouse.jpg","size": "large"}
              ]
            }
          },
          sortList = [{entity: "album", imageSort: ["extralarge", "mega"]}],
          result;

        this.collection.add(artistResp, {parse: true});
        this.collection.add(albumResp, {parse: true});

        result = this.collection.getImageBySort(sortList);
        expect(result).to.not.exist;

      });



      it("should return album image when sort is specified for artist & album with album matching element", function() {
        var artistResp = {
            "artist": {
              "image": [
                {"#text": "http://userserve-ak.last.fm/serve/126/886281.jpg","size": "large"},
                {"#text": "http://userserve-ak.last.fm/serve/252/886281.jpg","size": "extralarge"},
                {"#text": "http://userserve-ak.last.fm/serve/500/886281/Modest+Mouse.jpg","size": "mega"}
              ]
            }
          },
          albumResp = {
            "album": {
              "image": [
                {"#text": "http://userserve-ak.last.fm/serve/126/886281.jpg","size": "small"},
                {"#text": "http://userserve-ak.last.fm/serve/252/886281.jpg","size": "medium"},
                {"#text": "http://userserve-ak.last.fm/serve/500/886281/Modest+Mouse.jpg","size": "large"}
              ]
            }
          },
          sortList = [
            {entity: "artist", imageSort: ["medium", "small"]},
            {entity: "album", imageSort: ["small", "medium"]}
          ],
          result;

        this.collection.add(artistResp, {parse: true});
        this.collection.add(albumResp, {parse: true});

        result = this.collection.getImageBySort(sortList);
        result.should.have.property("image");
        result.image.size.should.equal("small");
        result.image.url.should.not.be.empty;

      });
    });

    describe("#getOrFetchAlbum", function() {
      
      beforeEach(function(){
        this.collection = new LastFmCollection();
        this.syncStub = sinon.stub();
        this.successCallback = sinon.spy();
        this.errorCallback = sinon.spy();
        this.collection.sync = this.syncStub;
      });

      it("should call success callback with existing model and not call fetch when called with valid artist", function(done) {

        var self = this;
        this.collection.add(ARTIST_RESPONSE, {parse: true});
        this.collection.getOrFetchArtist("Modest Mouse")
          .then(this.successCallback, this.errorCallback)
          .always(function() {
            var model = self.successCallback.args[0][0];
            model.isArtist().should.be.true;
            model.get("name").should.equal("Modest Mouse");
            self.syncStub.should.not.be.called;
            done();
          });
      });


      it("should call success callback and retrieve model by fetch and when called with valid artist", function(done) {

        var self = this;

        this.collection.model = this.collection.model.extend({
          sync: this.syncStub
        });

        this.syncStub.yieldsTo("success", ARTIST_RESPONSE);

        this.collection.getOrFetchArtist("Modest Mouse")
          .then(this.successCallback, this.errorCallback)
          .always(function() {
            var model = self.successCallback.args[0][0];
            model.isArtist().should.be.true;
            model.get("name").should.equal("Modest Mouse");
            self.syncStub.should.be.called;
            done();
          });
      });

    });
  });
});