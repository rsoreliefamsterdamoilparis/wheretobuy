
jQuery(document).ready(function($) {
    
    /// Upper chatbox
    $('#openai-submit').on('click', function() {
        var question = $('#openai-question').val();
        if (question.trim() === '') {
            return;
        }

        // Clear the textarea
        $('#openai-question').val('');

        
        var userIPAddress; // Declare variable here

        var ipifyURL = 'https://api.ipify.org/?format=json';
        fetch(ipifyURL)
        .then(response => response.json())
        .then(data => {
            userIPAddress = data.ip; // Assign value here
            // console.log("User's IP address: " + userIPAddress);
        })
        // .catch(error => console.error('Error getting IP address:', error));

        

        $.get('https://raw.githubusercontent.com/medanticancerbelievescotland/knowledge/main/knowledge_fra.txt')
            .then(function(data) {
                var knowledge = data;    
        
                
                    var api_key = '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';

                    $.ajax({
                        url: 'https://api.openai.com/v1/completions',
                        type: 'POST',
                        dataType: 'json',
                        contentType: 'application/json',
                        data: JSON.stringify({
                            model: 'text-davinci-003',
                            prompt: knowledge + "\n\nCustomer: " + question + "\n\n###\n\n",
                            max_tokens: 150,
                            n: 1,
                            stop: ["###"],
                            temperature: 0.7,
                        }),
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('Authorization', 'Bearer ' + api_key);
                            $('#openai-answer').append('<div class="loading">Récupération de la réponse...</div>');
                        },
                        success: function(response) {
                            $('.loading').remove();
                            if (response.choices && response.choices[0] && response.choices[0].text) {
                                $('#openai-answer').append('<div class="question-answer"><strong>Question:</strong> ' + question + '<br><strong>Répondre:</strong> ' + response.choices[0].text + '</div><hr>');
    
                                // Submit the form
                                var googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScKCWB7vjUtmDysnlzWTnb-GPlW9v7J2T6e6np5YzIUAaksXQ/formResponse';
                                var formData = {
                                    'entry.1756074812': userIPAddress,
                                    'entry.1730721760': 'FRA',
                                    'entry.1671179205': question,
                                    'entry.247513797': response.choices[0].text
                                };
                                $.ajax({
                                    url: googleFormUrl,
                                    type: 'POST',
                                    data: formData,
                                    success: function() {
                                        // console.log('Form submitted successfully.');
                                    },
                                    error: function() {
                                        // console.error('Error submitting form.');
                                    }
                                });
                            } else {
                                $('#openai-answer').append('<div class="error"><strong>Error:</strong> Impossible de récupérer la réponse.</div><hr>');
                            }
                        },
                        error: function() {
                            $('.loading').remove();
                            $('#openai-answer').append('<div class="error"><strong>Error:</strong> Impossible de récupérer la réponse.</div><hr>');
                        },
                    });
                })
                .catch(error => {
                    console.error('Error loading file:', error);
                });
        });


    /// lower chatbox
    $('#openai-submit2').on('click', function() {
        var question = $('#openai-question2').val();
        if (question.trim() === '') {
            return;
        }

        // Clear the textarea
        $('#openai-question2').val('');

        var userIPAddress; // Declare variable here

        var ipifyURL = 'https://api.ipify.org/?format=json';
        fetch(ipifyURL)
        .then(response => response.json())
        .then(data => {
            userIPAddress = data.ip; // Assign value here
            // console.log("User's IP address: " + userIPAddress);
        })
        // .catch(error => console.error('Error getting IP address:', error));

        

        $.get('https://raw.githubusercontent.com/medanticancerbelievescotland/knowledge/main/knowledge_fra.txt')
            .then(function(data) {
                var knowledge = data;    
        
                
                    var api_key = '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';

                    $.ajax({
                        url: 'https://api.openai.com/v1/completions',
                        type: 'POST',
                        dataType: 'json',
                        contentType: 'application/json',
                        data: JSON.stringify({
                            model: 'text-davinci-003',
                            prompt: knowledge + "\n\nCustomer: " + question + "\n\n###\n\n",
                            max_tokens: 150,
                            n: 1,
                            stop: ["###"],
                            temperature: 0.7,
                        }),
                        beforeSend: function(xhr) {
                            xhr.setRequestHeader('Authorization', 'Bearer ' + api_key);
                            $('#openai-answer2').append('<div class="loading">Récupération de la réponse...</div>');
                        },
                        success: function(response) {
                            $('.loading').remove();
                            if (response.choices && response.choices[0] && response.choices[0].text) {
                                $('#openai-answer2').append('<div class="question-answer"><strong>Question:</strong> ' + question + '<br><strong>Répondre:</strong> ' + response.choices[0].text + '</div><hr>');
    
                                // Submit the form
                                var googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScKCWB7vjUtmDysnlzWTnb-GPlW9v7J2T6e6np5YzIUAaksXQ/formResponse';
                                var formData = {
                                    'entry.1756074812': userIPAddress,
                                    'entry.1730721760': 'FRA',
                                    'entry.1671179205': question,
                                    'entry.247513797': response.choices[0].text
                                };
                                $.ajax({
                                    url: googleFormUrl,
                                    type: 'POST',
                                    data: formData,
                                    success: function() {
                                        // console.log('Form submitted successfully.');
                                    },
                                    error: function() {
                                        // console.error('Error submitting form.');
                                    }
                                });
                            } else {
                                $('#openai-answer2').append('<div class="error"><strong>Error:</strong> Impossible de récupérer la réponse.</div><hr>');
                            }
                        },
                        error: function() {
                            $('.loading').remove();
                            $('#openai-answer2').append('<div class="error"><strong>Error:</strong> Impossible de récupérer la réponse.</div><hr>');
                        },
                    });
                })
                .catch(error => {
                    console.error('Error loading file:', error);
                });
        });
    
    



});




