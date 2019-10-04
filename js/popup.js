// using tab access to login
(function() {
    function ihlog() {
        var tabClicks = [].slice.call(document.querySelectorAll('ul.tab-login li a.button'));
        tabClicks.map(function(btn) {
            btn.addEventListener('click', function() {
                document.querySelector('li a.active.button').classList.remove('active');
                btn.classList.add('active');
                document.querySelector('.tab-access-login.active').classList.remove('active');
                document.querySelector(btn.getAttribute('href')).classList.add('active');
            })
        })
    }
    if (document.readyState !== 'loading') ihlog(); else document.addEventListener('DOMContentLoaded', ihlog);
    $(".ope-log").click(function(){$("#login").css({'visibility':'visible', 'opacity':'1'});
    });$(".close").click(function(){$("#login").css({'visibility':'hidden', 'opacity':'0'});
    });
})();
