<template>
    <div class="contact-us-area">
        <div class="contauner-fluid">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-12 bg_color--1 pl--270 pt--160 pb--160 pl_lg--50 pl_md--50 pt_md--80 pb_md--80 pl_sm--30 pr_sm--30 pt_sm--80 pb_sm--80">
                    <div class="contact-address-wrapper">
                        <div class="classic-address text-left">
                            <h4 class="heading heading-h4">{{$t('contact.we_will_be_glad_to_receive_you')}}
                            </h4>
                            <div class="desc mt--15">
                                <p class="bk_pra line-height-2-22">Botko , <br> Douala , Cameroun</p>
                            </div>
                        </div>

                        <div class="classic-address text-left mt--60 ">
                            <h4 class="heading heading-h4">{{$t('contact.send_us_message')}}</h4>
                            <div class="desc mt--15 mb--80">
                                <p class="bk_pra line-height-2-22">ah.voila2010@gmail.com <br> (+237) 691129524</p>
                            </div>
                            <div class="social-share social--transparent">
                                <a href="https://www.facebook.com/FCHEMLE?mibextid=2JQ9oc" target="_blank">
                                    <i class="fab fa-facebook"></i>
                                </a>

                                <a href="https://instagram.com/hemlefcdebotko237?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12 bg_color--5 pt--160 pb--160 pl--60 pr--200 pr_lg--50 pl_md--30 pr_md--50 pr_sm--30 pb_md--80 pt_md--80 pl_sm--30 pt_sm--80 pb_sm--80">
                    <div class="contact-form-inner">
                        <div class="brook-title mb--40">
                            <h4 class="heading heading-h4">{{ $t('contact.contact_btn') }}</h4>
                        </div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ContactForm: () => import('../components/ContactForm'),
        },
    };
</script>