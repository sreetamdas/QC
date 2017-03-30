$(document).ready(function () {

    var quizzes_matrix = {
        /* */
        IndiaQuizPrelimsModal : 'https://docs.google.com/presentation/d/1lanTofFP29T96Z4RwTZMaQXHvH9HkRMrIEcqBdx06_s/pub?start:false&amp;loop:false&amp;delayms:3000',
        IndiaQuizTopicsModal : 'https://docs.google.com/presentation/d/1Z16pME0nROF7SmfkZ6VT7DduInjYeeHBguwB5aPDMwY/pub?start:false&amp;loop:false&amp;delayms:3000',
        IndiaQuizRound3Modal : 'https://docs.google.com/presentation/d/1zp9Q__gUgMPiMI0eZFh3mGV-RUr3s1PKVAwJTFIF5lM/pub?start:false&amp;loop:false&amp;delayms:3000',
        IndiaQuizLongConnectRoundModal : 'https://docs.google.com/presentation/d/1udKMyZaPux8ku53EZEZ70ieDNxst5WGnozPVi1m_pvA/pub?start:false&amp;loop:false&amp;delayms:3000',
        /* */
        BollywoodQuizPrelimsModal : 'https://docs.google.com/presentation/d/1gXw0ZA7koALO5rfp4bMlKEtAKj3obn-9HXm8qmRyjlk/pub?start:false&amp;loop:false&amp;delayms:3000',
        /* */
        QuantaQuizPrelimsModal : 'https://docs.google.com/presentation/d/1MYRxDr9vnpolTpWgq8ykExT8nbo-nE7T0-i-vv5lFi4/pub?start:false&amp;loop:false&amp;delayms:3000',
        QuantaQuizFinalsModal : 'https://docs.google.com/presentation/d/1CDhk_a1S0TwMrYulnZ1h3qjPJkvnJXDplM7xrOeF0eU/pub?start:false&amp;loop:false&amp;delayms:3000',
        /* */
        LogoQuizAptitudeModal : 'https://docs.google.com/presentation/d/1vzwlYKiQSPBJuIXvxniDmRgc8jtA8tJGQtp0dqTJgZo/pub?start:false&amp;loop:false&amp;delayms:3000',
        LogoQuizAddictionModal : 'https://docs.google.com/presentation/d/1HOdGxdlKDcGUDXo4YL24MESU-_fvnpJX5PtGt46Au1o/pub?start:false&amp;loop:false&amp;delayms:3000',
        LogoQuizEntertainmentModal : 'https://docs.google.com/presentation/d/1l42jazyA4QaDksE5nhPpP3o-6zIuQ5-_A4jSWUxZ5fM/pub?start:false&amp;loop:false&amp;delayms:3000',
        /* */
        ApotheosisQuizModal : 'https://docs.google.com/presentation/d/1vH1TfX1cnIeqhkASM_9d6hFPOq5GZunTqw_xrpnXgQo/pub?start:false&amp;loop:false&amp;delayms:3000',
        /* */
        EntertainmentQuizPrelimsModal : 'https://docs.google.com/presentation/d/1q0EoWmdb3TpiXApHfLrKQ2pJK9jzF0UfBbFcKL-RkJk/pub?start:false&amp;loop:false&amp;delayms:3000',
        EntertainmentQuizMemeGameModal : 'https://docs.google.com/presentation/d/1W1lLb95KArjzpTNzVHhJfRvAgiIsn22knR2uGyCTqpc/pub?start:false&amp;loop:false&amp;delayms:3000',
        EntertainmentQuizInfinitePounceModal : 'https://docs.google.com/presentation/d/1fqrQy0oVUXogWI6Hw7OAE-ZYV5oeCKmv6uvBOJNFEiQ/pub?start:false&amp;loop:false&amp;delayms:3000',
        EntertainmentQuizYouMakeYourOwnLuckModal : 'https://docs.google.com/presentation/d/1gx8JG_3fq7dQpgggm67VrE5_O_PPAYT1kYBAe5bgArg/pub?start:false&amp;loop:false&amp;delayms:3000',
        /* */
        SportsQuizPrelimsModal : 'https://docs.google.com/presentation/d/19ql3q8kSVyiRt4En8wBfwou0HRl3WJsKqhSw4Qgomtg/pub?start:false&amp;loop:false&amp;delayms:3000',
        SportsQuizFinalsModal : 'https://docs.google.com/presentation/d/15NOxsyXU9MQeUOnBY5WKDoZx9ZhagQo2fZTR8dAdIe8/pub?start:false&amp;loop:false&amp;delayms:3000',
        /* */
        FarewellQuizModal : 'https://docs.google.com/presentation/d/1Ae6otEbMVFwdXWs5Kcvz7Uf7VSNBcCop5fL3WukNrQk/pub?start:false&amp;loop:false&amp;delayms:3000',
        /* */
        WorldQuizPrelimsModal : 'https://docs.google.com/presentation/d/1jjZ15KpzURIdRjgc5hQC8k2kc5LVtPtRIooVWnjf6cI/pub?start:false&amp;loop:false&amp;delayms:3000',
        WorldQuizFinalsModal : 'https://docs.google.com/presentation/d/1uwPxf-q0DETahBsAAKoNGf7fuSZ813QKvRwnrPTRw0c/pub?start:false&amp;loop:false&amp;delayms:3000',
        /* */
        FriendsQuizPrelimsModal : 'https://docs.google.com/presentation/d/1250Ub300B-W5EvWTyEYG11Gr0O9jfvExYkNgsGPhUOs/pub?start:false&amp;loop:false&amp;delayms:3000',
        FriendsQuizInfinitePounce : 'https://docs.google.com/presentation/d/1Igp6XKYBAw5kj7pdTKIb1QojKITSBD8MGg6Vw8v9WgU/pub?start:false&amp;loop:false&amp;delayms:3000',
        FriendsQuizChallengeRoundModal : 'https://docs.google.com/presentation/d/1VDg1MsSiCZDdc7xUpmWNJgaTCStvejqdjQAV5jQh59c/pub?start:false&amp;loop:false&amp;delayms:3000',
        /* */
        HarryPotterQuizPrelimsModal : 'https://docs.google.com/presentation/d/1cfOc1WJK8189KfRnYxBNekg2PIyH7eZiM2aBfHEylWs/pub?start:false&amp;loop:false&amp;delayms:3000',
        HarryPotterQuizFinalsModal : 'https://docs.google.com/presentation/d/16_jj1DHYADHpjPI07jFDMT6iSj2g4UzbZ11C1wpGPp4/pub?start:false&amp;loop:false&amp;delayms:3000',
        /* */
        VigilanceQuizPrelimsModal : 'https://docs.google.com/presentation/d/e/2PACX-1vTzQQot7ovUFFawlziqiPZm5Dk4nay3MQpEjj0WO3M8kgClX4LAoIik8r9yFCp7f2u8mvmXkYNphftz/pub?start:false&amp;loop:false&amp;delayms:3000',
        VigilanceQuizFinalsModal : 'https://docs.google.com/presentation/d/e/2PACX-1vRRU_ZThGcLzuXigWs-E6x5ioqEqLv9cHhgIXhX1hyxLDXOikhsMdNvgGKwRnvcWW0kUdOTEwegEUHs/pub?start:false&amp;loop:false&amp;delayms:3000',
    }
    
    
    function open_quiz(quiz_id) {
        window.open(quizzes_matrix[quiz_id], '_blank');
    }
    
    $(".quiz_link").click(function () {
        var quiz_id = $(this).attr('href');
        console.log("Clicked " + quiz_id);
        quiz_id = quiz_id.substr(1);            // remove the '#' at the beginning
        console.log("ID = " + quiz_id);
        open_quiz(quiz_id);
    });    
    

});