import $ from 'jquery'

export function funcBokning(){ 
    $(document).ready(function(){
        $('.housing').show();
        $('.liftpass').hide();
        $('#housing').addClass('active');

        $('#housing').click(function(){
            $('.liftpass').slideUp();
            $('.housing').slideDown();
            $('#housing').addClass('active');
            $('#liftpass').removeClass('active');
        });
        
        $('#liftpass').click(function(){
            $('.housing').slideUp();
            $('.liftpass').slideDown();
            $('#liftpass').addClass('active');
            $('#housing').removeClass('active');
        });

        $('.alt-btn').hover(
            function() {
                $(this).css('transform', 'scale(1.15)') 
            },
            function() {
                $(this).css('transform', 'scale(1)')
            }
        )  
    });
}