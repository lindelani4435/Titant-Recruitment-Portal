@component('mail::message')
# Welcome to Titan Recruitment Portal

We would Like to thank you for choosing us as you are looking forward to kick start your career. With out anytime waisting please Click on the "Login" button and start updating your profile

@component('mail::button', ['url' => '/my-profile'])
LogIn
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
