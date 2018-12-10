NProgress.start();

NProgress.done();

$('.navs ul').prev('a').on('click', function() {
    $(this).next().slideToggle();
});
$.ajax({
    url: '/api/employee/checkRootLogin',
    type: 'get',
    success: function(info) {
        if (info.error) location.href = '/admin/login.html?url=' + location.href;
    }
})
$('.fa-sign-out').parent().on('click', function() {
    $.ajax({
        url: '/api/employee/employeeLogout',
        type: 'get',
        success: function(info) {
            if (info.success) return location.href = '/admin/login.html?url=' + location.href;
        }
    })
})