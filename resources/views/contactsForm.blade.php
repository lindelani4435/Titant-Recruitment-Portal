@extends('layouts.app')
@section('content')
    <!-- Header start -->
    @include('includes.header')
    <!-- Header end -->
    <!-- Inner Page Title start -->
    @include('includes.inner_page_title', ['page_title'=>__('Contact Us')])
    <!-- Inner Page Title end -->

    <div class="container">
        <div class="contact-wrap">
            <div class="title"> <span>{{__('We Are Here To Help You')}}</span>
                <h2>{{__('GET IN TOUCH FAST')}}</h2>
                <p>
                    {{__('If you have a question about annything, our team')}}
                    <br>
                    {{__('is ready to answer all your questions.')}}
                </p>
            </div>
            <!-- Contact Info -->
            <div class="contact-now">
                <div class="row">
                    <div class="col-lg-4 column">
                        <div class="contact"> <span><i class="fa fa-home"></i></span>
                            <div class="information"> <strong>{{__('Address')}}:</strong>
                                <p>{{ $siteSetting->site_street_address }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- Contact Info -->
                    <div class="col-lg-4 column">
                        <div class="contact"> <span><i class="fa fa-envelope"></i></span>
                            <div class="information"> <strong>{{__('Email Address')}}:</strong>
                                <p><a href="mailto:{{ $siteSetting->mail_to_address }}">{{ $siteSetting->mail_to_address }}</a></p>
                            </div>
                        </div>
                    </div>
                    <!-- Contact Info -->
                    <div class="col-lg-4 column">
                        <div class="contact"> <span><i class="fa fa-phone"></i></span>
                            <div class="information"> <strong>{{__('Phone')}}:</strong>
                                <p><a href="tel:{{ $siteSetting->site_phone_primary }}">{{ $siteSetting->site_phone_primary }}</a></p>
                                <p><a href="tel:{{ $siteSetting->site_phone_secondary }}">{{ $siteSetting->site_phone_secondary }}</a></p>
                            </div>
                        </div>
                    </div>
                    <!-- Contact Info -->
                </div>
                <div class="row">
                    <div class="col-lg-4 column">
                        <!-- Google Map -->
                        <div class="googlemap">
                            <iframe src="https://maps.google.it/maps?q={{urlencode(strip_tags($siteSetting->site_google_map))}}&output=embed" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="col-lg-8 column">
                        <div class="contact-form">
                            <div id="message"></div>
                            <form method="post" action="{{ route('contact.us')}}" >
                                @csrf
                                <div class="form-group">
                                    <label for="">Full Name</label>
                                    <input type="text" class="form-control" name="full_Name" placeholder="Enter your name" value="{{old('full_Name')}}">
                                    @error('full_Name')<span class="text-danger">{{$message}}</span>@enderror
                                </div>
                                <div class="form-group">
                                    <label for="">Email</label>
                                    <input type="email" class="form-control" name="email" placeholder="Enter your email" value="{{old('email')}}">
                                    @error('email')<span class="text-danger">{{$message}}</span>@enderror
                                </div>
                                <div class="form-group">
                                    <label for="">Phone</label>
                                    <input type="text" class="form-control" name="phone" placeholder="Enter your phone" value="{{old('phone')}}">
                                    @error('phone')<span class="text-danger">{{$message}}</span>@enderror
                                </div>
                                <div class="form-group">
                                    <label for="">Subject</label>
                                    <input type="text" class="form-control" name="subject" placeholder="Enter your subject" value="{{old('subject')}}">
                                    @error('subject')<span class="text-danger">{{$message}}</span>@enderror
                                </div>
                                <div class="form-group">
                                    <label for="">Message</label>
                                    <textarea class="form-control" name="message_txt" placeholder="Enter your message" value="{{old('message_txt')}}"></textarea>
                                    @error('message_txt')<span class="text-danger">{{$message}}</span>@enderror
                                </div>
                                <button class="button" type="submit" id="submit">Submit Now</button>

                            </form>
                        </div>
                    </div>
                </div>


    @include('includes.footer')
@endsection