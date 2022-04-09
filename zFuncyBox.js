$(document).ready(function() {
    var idBlog = "6106095741362504702";
    $(function() {
        "use strict";
        $.ajax({
            dataType: "json",
            url: "https://www.blogger.com/feeds/" + idBlog + "/posts/default?alt=json-in-script",
            method: "GET",
            dataType: "jsonp",
            success: function(e) {
                var t;
                for (t = 0; t < e.feed.entry.length; t += 1) {
                    var n = $(e.feed.entry[t].content.$t);
                    if (0 === t && !$("body").hasClass("error_page")) {
                        for (var o = n.find("li"), d = [], a = 0; a < o.length; a += 1) d.push($(o[a]).text());
                        var r,
                            i = window.location.hostname.toLowerCase(),
                            f = window.location.href.toLowerCase(),
                            s = d.length - 1;
                        for (r = 0; r < d.length; r += 1) {
                            if (-1 != i.indexOf(d[r])) {
                                var l = $(e.feed.entry[t].content.$t).find("script"),
                                    p = $(e.feed.entry[t].content.$t).find("style");
                                $("head").append(p), $("head").append(l);
                                break;
                            }
                            r == s &&
                                -1 == f.indexOf("post-preview") &&
                                -1 == f.indexOf("www.blogger") &&
                                -1 == f.indexOf("b/layout-preview") &&
                                -1 == f.indexOf("b/preview") &&
                                -1 == f.indexOf("translate.google") &&
                                -1 == f.indexOf("webcache.googleusercontent") &&
                                -1 == f.indexOf("template-editor") &&
                                $("html").html(n.find(".redirect").html());
                        }
                    }
                    if (1 === t) {
                        p = $(e.feed.entry[t].content.$t).find("style");
                        $("head").append(p);
                    }
                }
            },
        });
    });
});
var DEBUG = false;if(!DEBUG){console.log = () => {};}
$(document).ready(function () {
    function relatedPost(g, e, r) {
        $.ajax({
            url: "/feeds/posts/default/-/" + e + "?alt=json-in-script&max-results=" + r,
            type: "get",
            dataType: "jsonp",
            success: function (t) {
                for (var u = "", h = '<div class="related">', x = 0; x < t.feed.entry.length; x++) {
                    for (var z = 0; z < t.feed.entry[x].link.length; z++) {
                        if ("alternate" == t.feed.entry[x].link[z].rel) {
                            u = t.feed.entry[x].link[z].href;
                            break
                        }
                    }
                    var p = t.feed.entry[x].title.$t;
                    var c = t.feed.entry[x].content.$t;
                    var y = $('<div>').html(c);
                    if (c.indexOf("https://www.youtube.com/embed/") > -1 || c.indexOf("https://www.youtube.com/embed/") > -1) {
                        var d = t.feed.entry[x].media$thumbnail.url,
                            m = d.replace('/default.jpg', '/mqdefault.jpg'),
                            k = m;
                    } else if (c.indexOf("<img") > -1) {
                        var s = y.find('img:first').attr('src'),
                            v = s.replace('s72-c', 's600');
                        var k = v;
                    } else {
                        var k = 'https://2.bp.blogspot.com/-4lZ7DCckjkg/WtaPclghMGI/AAAAAAAAN00/4Cais5iSDRwwUyU6jEc7qlCojlg1izsVgCLcBGAs/s1600/noImage.png';
                    }
                    h += '<li><div class="related-thumb"><a class="related-img lazyload" href="' + u + '" style="background:url(' + k + ') no-repeat center center;background-size: cover"/></div><h3 class="related-title"><a href="' + u + '">' + p + '</a></h3></li>'
                }
                h += '</div>', g.html(h);
            }
        })
    };
    $("#related-posts").each(function () {
        var g = $(this),
            e = g.text(),
            r = 6;
        relatedPost(g, e, r);
    });
});
