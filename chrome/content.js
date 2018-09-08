// chrome.runtime.sendMessage({})

var ele = document.querySelectorAll('[role="feed"]');
// var title = 'Malaysia Airlines';
// var postTime = 'Yesterday at 4:00 PM';
var userName = 'Leow Yang Yang';
var iconURL = 'http://www.abc.net.au/news/image/9343482-3x2-700x467.jpg';
/*var postMessage = 'Experience our latest cabin products and newest inflight entertainment system on the new <a class="_58cn" href="/hashtag/singaporeaira350?source=feed_text&amp;__xts__%5B0%5D=68.ARBvXhWRonbF6lUOWbp_Ft9Y3-9T4Me-3zrkbEwj1D07khl2WBV1fSkMAYjG8zyNkJBacxGfiieFIb3hlUMWdM6lQqSNy85TEiqnM9vPti7EHJ9KU4pwGqvy92aj7Zpo9RcSkPRnGQgpjCihScI_LGpVgBg4yLmxLLxvyRQZGbyPlV70lDMsIxVx_u_RUA6hFzlr7KIo54mNOis-tu7bqX39utdoSbd4x3snaL8dOQ&amp;__tn__=%2ANK-R" data-ft="{&quot;type&quot;:104,&quot;tn&quot;:&quot;*N&quot;}"><span class="_5afx"><span aria-label="hashtag" class="_58cl _5afz">#</span><span class="_58cm">MalaysianAirA450</span></span></a> medium haul aircraft, launching from Malaysia to Adelaide starting 17 December. Find out more: <a href="https://bit.ly/2Nk8tio" target="_blank" data-ft="{&quot;tn&quot;:&quot;-U&quot;}" rel="noopener nofollow" data-lynx-mode="async" data-lynx-uri="https://l.facebook.com/l.php?u=https%3A%2F%2Fbit.ly%2F2Nk8tio&amp;h=AT3u8M2k6JNSNZ5e7pQFU952uYI9GODHJARYeMD5WnQBQpOEghG0zuR25n1iCnx8Js3l-BaKXRAtXjkKx8jWQ8yzx306Fh61nmkF0-mjeVguBM2CGXSlvakhgHRVtZRXrCBPx-cAYjHonXAKzT_z0Y958c1lBD0WqGHrC2VZQd6Rzo1fhocIcmYeRhUdR7fkKBmAnLE4H91KRbwfwOhd6b1RzubpB3calY5c3jzBTZrbDERTbNJGJIWw8rz8IGA3AhF-v6qKYGpzRBl_4C0RLFkl4Cuv6ev1SvnoOkQXZvkJKvCNe6zAwesHd1d_fkHv9vpG5LH38OkehC-i6f4nAjIkWkMv0EdzH4xxnUMfiwdAQRH0Pd9fTQlFujOblKd9jA9toZzZK5RWOkr2-8pVgCcNDxAGxVQ7Jn7dzk4ZDQgYAQrSjGV7mnx2qJehkEFuyoiN2KFoYKRCS2An49ylTw1DGZvi9gKPi1Jz5A">bit.ly/2Nk8tio</a>'*/


var url = 'http://localhost:5000/article';
var data = {
  category: "conspiracy",
}

$.ajax({
  type: "PUT",
  url: url,
  data: JSON.stringify({ "category": "bs"}),
  contentType: "application/json ; charset=utf-8",
  success: function(result) {
    console.log(result);
    var c = $.parseHTML(ele[0].innerHTML);
    var title = result.siteUrl;
    var postTime = result.date;
    var imageURL = result.imageURL;
    var post0 = result.text_lower;
    var post1 = result.text_upper;
    var numComments = 80;
    var numLikes = 591;
    var numShares = 39;
    var newPost = `<div data-fte="2" data-ftr="2" class="_5jmm _5pat _3lb4 s_2ayh6w87r" id="hyperfeed_story_id_5b9278607dd2f8f88862801" data-testid="fbfeed_story" data-cursor="MTUzNjMyNTY0NDoxNTM2MzI1NjQ0Ojg6NDY2MTM4NjgwNDM3MDc1NTI5MDowOjY1OTg0NjgzOTg3NjQ4OTM0ODk=" data-dedupekey="4661386804370755290" data-timestamp="1536220801" aria-posinset="8" aria-setsize="51" data-referrer="hyperfeed_story_id_5b9278607dd2f8f88862801" role="article" aria-labelledby="js_2c" aria-describedby="js_2d js_2e" data-insertion-position="1"><div class="_4-u2 mbm _4mrt _5v3q _4-u8" id="u_fetchstream_2_1"><div class="_3ccb" data-ft="{&quot;tn&quot;:&quot;-R&quot;}" data-gt="{&quot;type&quot;:&quot;click2canvas&quot;,&quot;fbsource&quot;:703,&quot;ref&quot;:&quot;nf_generic&quot;}" id="u_fetchstream_2_2"><div></div><div></div><div class="_5pcr userContentWrapper" style="" data-ft="{&quot;tn&quot;:&quot;-R&quot;}"><div class="_1dwg _1w_m _q7o"><div class="_4r_y" id="u_fetchstream_2_5"><div class="_6a uiPopover _5pbi _cmw _b1e _1wbl" id="u_fetchstream_2_6" data-ft="{&quot;tn&quot;:&quot;V&quot;}"><a aria-label="Story options" data-testid="post_chevron_button" class="_4xev _p" aria-haspopup="true" aria-expanded="false" rel="toggle" href="#" role="button" id="u_fetchstream_2_7"></a></div></div><div><div class="m_2ayh6_e2z d_2ayh6y0ns clearfix"><div class="clearfix o_2ayh6_c_g"><a class="_5pb8 i_2ayh6y0nn _8o _8s lfloat _ohe"><div class="_38vo"><img class="_s0 _4ooo _5xib _5sq7 _44ma _rw img" src="${iconURL}" alt="" aria-label="${title}" role="img"></div></a><div class="clearfix _42ef"><div class="rfloat _ohf"></div><div class="r_2ayh6_c_b"><div><div class="_6a _5u5j"><div class="_6a _6b" style="height:40px"></div><div class="_6a _5u5j _6b"><h5 class="_14f3 _14f5 _5pbw _5vra" data-ft="{&quot;tn&quot;:&quot;C&quot;}" id="js_2c"><span class="fwn fcg"><span class="fwb fcg" data-ft="{&quot;tn&quot;:&quot;k&quot;}"><a href="https://www.facebook.com/singaporeair/?hc_ref=ARTG9LB-Q-W5hbmH7INCQE4nQ6yB6Avpqet-YO7UXHDQx0uWFiZYJ05dwQj49MKmJYs&amp;fref=nf&amp;__xts__%5B0%5D=68.ARBvXhWRonbF6lUOWbp_Ft9Y3-9T4Me-3zrkbEwj1D07khl2WBV1fSkMAYjG8zyNkJBacxGfiieFIb3hlUMWdM6lQqSNy85TEiqnM9vPti7EHJ9KU4pwGqvy92aj7Zpo9RcSkPRnGQgpjCihScI_LGpVgBg4yLmxLLxvyRQZGbyPlV70lDMsIxVx_u_RUA6hFzlr7KIo54mNOis-tu7bqX39utdoSbd4x3snaL8dOQ&amp;__tn__=kC-R" data-hovercard="/ajax/hovercard/page.php?id=6352578678&amp;extragetparams=%7B%22hc_ref%22%3A%22ARTG9LB-Q-W5hbmH7INCQE4nQ6yB6Avpqet-YO7UXHDQx0uWFiZYJ05dwQj49MKmJYs%22%2C%22fref%22%3A%22nf%22%7D" data-hovercard-prefer-more-content-show="1" data-hovercard-referer="ARTG9LB-Q-W5hbmH7INCQE4nQ6yB6Avpqet-YO7UXHDQx0uWFiZYJ05dwQj49MKmJYs">${title}</a></span></span></h5><div class="_5pcp _5lel _2jyu _232_" id="feed_subtitle_247;6352578678;10156828810873679;10156828810873679;1536220801:4661386804370755290:5:0"><span class="s_2ayh6_rlr p_2ayh6wnyb" data-ft="{&quot;tn&quot;:&quot;j&quot;}"><a class="h_2ayh6ywln u_2ayh6wny8" href="#"></a></span><span class="_6spk" role="presentation" aria-hidden="true"> · </span><span class="e_2ayh70uxs"><span class="fsm fwn fcg"><a rel="theater" ajaxify="/singaporeair/photos/a.10151644964573679/10156828810873679/?type=3&amp;size=1200%2C628&amp;fbid=10156828810873679&amp;source=12&amp;player_origin=unknown&amp;__xts__%5B0%5D=68.ARBvXhWRonbF6lUOWbp_Ft9Y3-9T4Me-3zrkbEwj1D07khl2WBV1fSkMAYjG8zyNkJBacxGfiieFIb3hlUMWdM6lQqSNy85TEiqnM9vPti7EHJ9KU4pwGqvy92aj7Zpo9RcSkPRnGQgpjCihScI_LGpVgBg4yLmxLLxvyRQZGbyPlV70lDMsIxVx_u_RUA6hFzlr7KIo54mNOis-tu7bqX39utdoSbd4x3snaL8dOQ&amp;__tn__=-R" class="_5pcq" href="/singaporeair/photos/a.10151644964573679/10156828810873679/?type=3" target=""><abbr title="09/06/2018 4:00pm" data-utime="1536220801" data-shorten="1" class="_5ptz"><span class="timestampContent" id="js_2d">${postTime}</span></abbr></a></span></span><span class="_6spk" role="presentation" aria-hidden="true"> · </span><a class="uiStreamPrivacy inlineBlock fbStreamPrivacy fbPrivacyAudienceIndicator _5pcq" aria-label="Public" href="#" role="button" data-hover="tooltip" data-tooltip-content="Public"><i class="lock img sp_ZQiSBM2-jgL_2x sx_0c356c"></i></a></div></div></div></div></div></div></div></div><div class="_5pbx userContent _3576" data-ft="{&quot;tn&quot;:&quot;K&quot;}" id="js_2e"><div id="id_5b93a531bfe7f3929019843" class="text_exposed_root"><p>${post0}</p><span class="text_exposed_hide">...</span><span class="text_exposed_show"><p>${post1}</p></span><span class="text_exposed_hide"> <span class="text_exposed_link"><a class="see_more_link" onclick="var func = function(e) { e.preventDefault(); }; var parent = Parent.byClass(this, &quot;text_exposed_root&quot;); if (parent &amp;&amp; parent.getAttribute(&quot;id&quot;) == &quot;id_5b93a531bfe7f3929019843&quot;) { CSS.addClass(parent, &quot;text_exposed&quot;); Arbiter.inform(&quot;reflow&quot;); }; func(event); " href="/MyRepublicSG/posts/2303190783041588" data-ft="{&quot;tn&quot;:&quot;e&quot;}"><span class="see_more_link_inner">See More</span></a></span></span></div></div><div class="_3x-2" data-ft="{&quot;tn&quot;:&quot;H&quot;}"><div data-ft="{&quot;tn&quot;:&quot;H&quot;}"><div class="mtm"><div style="position:relative"><div class="_5cq3 _1ktf" data-ft="{&quot;tn&quot;:&quot;E&quot;}"><div class="uiScaledImageContainer _4-ep" style="width:500px;height:261px;" id="u_fetchstream_2_3"><img class="scaledImageFitWidth img" src="${imageURL}"></div></div></div></div></div></div><div></div></div></div><div><form rel="async" class="commentable_item collapsed_comments" method="post" data-ft="{&quot;tn&quot;:&quot;]&quot;}" action="/ajax/ufi/modify.php" onsubmit="return window.Event &amp;&amp; Event.__inlineSubmit &amp;&amp; Event.__inlineSubmit(this,event)" id="u_fetchstream_2_9"><input type="hidden" name="jazoest" value="26581721228466981031171031201095865817189971028586816873108" autocomplete="off"><input type="hidden" name="fb_dtsg" value="AQHzTBbgugxm:AQGYafUVQDIl" autocomplete="off"><input type="hidden" autocomplete="off" name="ft_ent_identifier" value="10156828810873679"><input type="hidden" autocomplete="off" name="data_only_response" value="1"><div class="_sa_ _gsd _fgm _5vsi _192z _1sz4 _1i6z"><div class="_37uu"><div><div class="_57w"><div class="_3399 _1f6t _4_dr _20h5"><div class="_524d"><div class="_ipn clearfix _-5d"><div class="_ipo"><div class="_36_q"><a aria-live="polite" class="_ipm _-56" data-comment-prelude-ref="action_link_bling" data-ft="{&quot;tn&quot;:&quot;O&quot;}" data-hover="tooltip" data-tooltip-uri="/ufi/comment/tooltip/?ft_ent_identifier=10156828810873679&amp;av=648263185" href="/singaporeair/photos/a.10151644964573679/10156828810873679/?type=3&amp;comment_tracking=%7B%22tn%22%3A%22O%22%7D" role="button">${numComments} Comments</a></div><div class="_36_q"><a aria-live="polite" class="_ipm _2x0m" data-hover="tooltip" data-tooltip-uri="/ufi/share/tooltip/?ft_ent_identifier=10156828810873679&amp;av=648263185" href="/shares/view?id=10156828810873679&amp;av=648263185" role="button">${numShares} Shares</a></div></div><div class="_1vaq"><div class="_ipp"><div class="_3t53 _4ar- _ipn"><span aria-label="See who reacted to this" class="_3t54" role="toolbar" tabindex="0"><a data-hover="tooltip" feedback="[object Object]" reaction="1" aria-label="972 Like" data-testid="ufi_bling_token_1" class="_3emk _401_" ajaxify="/ufi/reaction/profile/dialog/?ft_ent_identifier=10156828810873679&amp;reaction_type=1&amp;av=648263185" href="/ufi/reaction/profile/browser/?ft_ent_identifier=10156828810873679&amp;av=648263185" rel="dialog" role="button" tabindex="-1"><span class="_9zc _2p7a _4-op _3uet _4e-m"><i class="_3j7l _2p78 _9-- _hly"></i></span><span class="_3chu">972</span></a><a data-hover="tooltip" feedback="[object Object]" reaction="2" aria-label="75 Love" data-testid="ufi_bling_token_2" class="_3emk _401_" ajaxify="/ufi/reaction/profile/dialog/?ft_ent_identifier=10156828810873679&amp;reaction_type=2&amp;av=648263185" href="/ufi/reaction/profile/browser/?ft_ent_identifier=10156828810873679&amp;av=648263185" rel="dialog" role="button" tabindex="-1"><span class="_9zc _2p7a _4-op _3uet _4e-m"><i class="_3j7m _2p78 _9-- _hly"></i></span><span class="_3chu">75</span></a><a data-hover="tooltip" feedback="[object Object]" reaction="3" aria-label="4 Wow" data-testid="ufi_bling_token_3" class="_3emk _401_" ajaxify="/ufi/reaction/profile/dialog/?ft_ent_identifier=10156828810873679&amp;reaction_type=3&amp;av=648263185" href="/ufi/reaction/profile/browser/?ft_ent_identifier=10156828810873679&amp;av=648263185" rel="dialog" role="button" tabindex="-1"><span class="_9zc _2p7a _4-op _3uet _4e-m"><i class="_3j7n _2p78 _9-- _hly"></i></span><span class="_3chu">4</span></a></span><a class="_2x4v" href="/ufi/reaction/profile/browser/?ft_ent_identifier=10156828810873679&amp;av=648263185" rel="ignore" role="button"><span aria-hidden="true" class="_1g5v"><span data-hover="tooltip" data-tooltip-uri="/ufi/reaction/tooltip/?ft_ent_identifier=10156828810873679&amp;av=648263185">${numLikes}</span></span><span class="_4arz"><span data-hover="tooltip" data-tooltip-uri="/ufi/reaction/tooltip/?ft_ent_identifier=10156828810873679&amp;av=648263185">${numLikes}</span></span></a></div></div></div></div></div></div><div id="fpost" onclick="alert('You just shared fake news!')"><div class="_3399 _a7s _20h6 _610i _610j _125r _2h27 clearfix _zw3"><div class="_3m9g"><div class="_40yk _610g _610h _pbn"><span class="_6vh" data-testid="actor-selector"><span data-hover="tooltip" data-tooltip-content="Liking and commenting as ${userName}"><span><a aria-label="Liking and commenting as ${userName}" type="button" class="_55pi _2agf _4o_4 _4jy0 _4jy3 _517h _51sy _59pe _42ft" aria-haspopup="true" role="button" href="#" style="max-width: 200px;"><span alt="" class="_-xe _3-8_"><span><img class="_6vg img" height="16" src="https://scontent.fsin1-1.fna.fbcdn.net/v/t1.0-1/p64x64/11695551_10153412427118186_6431866363320201942_n.jpg?_nc_cat=0&amp;oh=121c1cfee147ab92d5edc0983638aea4&amp;oe=5C3A6122" width="16" alt=""></span></span><span class="accessible_elem"><span class="_55pe">${userName}</span></span><span alt="" class="_4o_3"><i alt="" class="img sp_ZQiSBM2-jgL_2x sx_8e72f4"></i></span></a></span></span></span></div></div><div class="_524d"><div class="_42nr _1mtp"><span class="_1mto"><div class="_khz _4sz1 _4rw5 _3wv2"><a aria-pressed="false" class="UFILikeLink _4x9- _4x9_ _48-k" data-testid="fb-ufi-likelink" href="#" role="button" tabindex="0">Like</a><span class="accessible_elem" data-accessibilityid="virtual_cursor_trigger" tabindex="-1" role="button">Show more reactions</span></div></span><span class="_1mto"><span class="_6a _15-7 _3h-u _4k43"><a class="comment_link _5yxe" role="button" href="#" title="Leave a comment" data-ft="{ &quot;tn&quot;: &quot;S&quot;, &quot;type&quot;: 24 }">Comment</a></span></span><span class="_1mto"><span class="_27de _4noj"><a href="#" data-testid="ufi_share_link_placeholder" class="share_action_link _5f9b" role="button" tabindex="0" data-ft="{ &quot;tn&quot;: &quot;J&quot;, &quot;type&quot;: 25 }" title="Send this to friends or post it on your timeline.">Share</a></span></span></div></div></div></div></div></div></div></div><div class="uiUfi UFIContainer _3-a6 _4eno _1blz _69ad _65_9 _5pc9 _5vsj _5v9k" id="u_fetchstream_2_8"></div></form></div></div></div></div></div>`;
    ele[0].innerHTML = $(c[0]).html()+ newPost + $(c[2]).clone().wrap('<p></p>').parent().html();
  },
  dataType: 'json'
});

//$.put(url, data, function(response, status) {
//  console.log('sent');
//})
