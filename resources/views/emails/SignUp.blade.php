@component('mail::message')
# Welcome {{$name}} to Titan Recruitment

Please verify your email by clicking the "Verify" button so
that you can be able to edit your profile

@component('mail::button', ['url' => 'http://127.0.0.1:8000/my-profile'])
Verify
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
