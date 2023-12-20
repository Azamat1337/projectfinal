import './css/pages/contact.css';

function Contact(){
    return(
        
    <main>
    <article>

        <section class="section contact has-bg-image" aria-labelledby="contact-label" 
            style={{backgroundImage:' url(./assets/images/contact-bg.png)'}}>
            <div class="container">

                <form action="" class="contact-form">

                    <h2 class="headline-sm" id="contact-label">Contact with me</h2>

                    <p class="contact-text body-md">
                        
                    </p>

                    <div class="wrapper">

                        <div>
                            <label for="name" class="label">First name</label>

                            <input type="text" name="name" id="name" placeholder="Name " required 
                                class="input-field"/>
                        </div>

                        <div>
                            <label for="email" class="label">Your Email</label>

                            <input type="email" name="email" id="email" placeholder="Email" required 
                                class="input-field"/>
                        </div>

                    </div>

                    <label for="subject" class="label">Subject</label>
                    <input type="text" name="subject" id="subject" placeholder="Subject " 
                        class="input-field"/>

                    <label for="message" class="label">Your message </label>
                    <textarea name="message" id="message" placeholder="Your message" required
                        class="input-field"></textarea>
                    
                    <a href="#" class="btn btn-tertiary">Send Message</a>

                </form>

                <div class="contact-content">

                    <ul class="contact-list">

                        <li class="contact-item">

                            <div class="item-icon" style={{backgroundColor:' hsl(177, 39%, 72%)'}}>
                                <ion-icon name="call" aria-hidden="true"></ion-icon>
                            </div>

                            <div>
                                <p class="label-lg">Phone</p>

                                <a href="tel:+77777777777" class="body-lg">+7 777 777 77 77</a>
                            </div>

                        </li>

                        <li class="contact-item">

                            <div class="item-icon" style={{backgroundColor:' hsl(41, 99%, 64%)'}}>
                                <ion-icon name="mail" aria-hidden="true"></ion-icon>
                            </div>

                            <div>
                                <p class="label-lg">Mail</p>

                                <a href="tel:pentagon@all.world" class="body-lg">pentagon@all.world</a>
                            </div>

                        </li>

                        <li class="contact-item">

                            <div class="item-icon" style={{backgroundColor:' hsl(19, 97%, 85%)'}}>
                                <ion-icon name="location" aria-hidden="true"></ion-icon>
                            </div>

                            <div>
                                <p class="label-lg">IITU</p>

                                <address class="body-lg">RoK, Almaty, Manas 34/1</address>
                            </div>

                        </li>

                    </ul>

                </div>

            </div>
        </section>

    </article>
</main>

    )
}

export default Contact;