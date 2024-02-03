'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from 'react';

export default function Home() {
  let [num, setNum] = useState(0);
  let [display, setDisplay] = useState('none');
  let [width, setWidth] = useState(480);
  let [mobileView, setMobileView] = useState(false);


  useEffect(() => {
    function Resize() {
      if (typeof window !== 'undefined') {
        setWidth((window.innerWidth < 601) ? 285 : 480);

        if (window.innerWidth < 601) {
          setMobileView(true);
        }
      }
    }
    Resize();

    window.addEventListener('resize', Resize);

    return () => {
      window.removeEventListener('resize', Resize);
    };
  }, []);  

  const click = () => {
    if (display === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  }

  function forward() {
    if (num >= 0 && num < 3) { 
      setNum(num + 1);
    }
  }

  function backward() {
    if (num > 0) { 
      setNum(num - 1);
    }
  }

  return (
    <main className={styles.main}>

      <div className={styles.dropdown} style={{ display: `${display}` }}>
        <ul style={{ transition: 'display 0.3s ease-in-out', display: `${display}` }}>
          <li className={styles.nav_li}>RVs</li>
          <li className={styles.nav_li}>Road Trips</li>
          <li className={styles.nav_li}>FAQ</li>
          <li className={styles.nav_li}>About</li>
        </ul>
      </div>

      <div className={styles.chat}>
        <Image style={{ marginRight: '16px' }}
          src="/pf.svg"
          alt=""
          width={30}
          height={30}
        />
        <p style={{ color: '#ffff', fontSize: '16px', fontWeight: '300' }}>Let's Chat!</p>
      </div>

      <nav className={styles.nav}>
        <div className={styles.user_section}>
          <Image
            src="/pf.svg"
            alt=""
            width={40}
            height={40}
          />
          <div className={styles.details}>
            <p className={styles.username}>Dandy Campers</p>
            <p className={styles.role}>RV Rentals</p>
          </div>
        </div>
        <ul className={styles.nav_links}>
          <li className={styles.li}>RVs</li>
          <li className={styles.li}>Road Trips</li>
          <li className={styles.li}>FAQ</li>
          <li className={styles.li}>About</li>
        </ul>
        <button className={styles.nav_btn}>check Availability</button>
        <Image className={styles.hamburger}
          src="/burger-menu.svg"
          alt=""
          width={42}
          height={42}
          onClick={click}
        />
      </nav>

      <div className={styles.home}>
        <div className={`${styles.overlay} ${styles.overlay_home}`}>
          <h1 className={styles.h1}>RV Rentals <br />in California</h1>
          {
            ( mobileView === true ) ? (
              <>
                <p className={styles.p_big}>Travel the way <br /> you want to</p>
                <button className={styles.button}>check Avilability</   button>
              </>
            ) : (
              <>
                <div className={styles.input_bar}>
                  <p className={styles.p_big}>Travel the way you  want to</p>
                  <button className={styles.button}>check   Avilability</   button>
                </div>
              </>
            )
          }
        </div>
      </div>

      <div className={styles.whyus}>
        <div className={styles.heading}>Why Book with us</div>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className={`${styles.text}`}>Roadside <br />Assistance</h1>
          </div>
          <div className={styles.middle}>
            <h1 className={`${styles.text}`}>Unlimited <br />Miles</h1>
          </div>
          <div className={styles.right}>
            <div className={styles.top}>
              <h1 className={`${styles.text}`}>Trip <br />Advice</h1>
            </div>
            <div className={styles.bottom}>
              <h1 className={`${styles.text}`}>No <br />Booking <br />Fees</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.heading} style={{ marginTop: '0px', width: 'auto' }}>Book your Trip in 3 easy steps</div>
        <div className={styles.content}>
          <div className={styles.left_1}>
            <div className={styles.box}>
              <p className={styles.t_small}>01</p>
              <h2 className={styles.h2}>Reserve Your Ride</h2>
              <p className={styles.t_small}>I'm a paragraph. Click here to add your own text and edit me.<br /> Let your users get to know you.</p>
            </div>
            <div className={styles.box}>
              <p className={styles.t_small}>02</p>
              <h2 className={styles.h2}>Plan your Trip</h2>
              <p className={styles.t_small}>I'm a paragraph. Click here to add your own text and edit me.<br /> Let your users get to know you.</p>
            </div>
            <div className={styles.box}>
              <p className={styles.t_small}>03</p>
              <h2 className={styles.h2}>Hit the Road</h2>
              <p className={styles.t_small}>I'm a paragraph. Click here to add your own text and edit me.<br /> Let your users get to know you.</p>
            </div>
          </div>
          <div className={styles.right_1}>
            <Image className={styles.image_bottom} style={{ objectFit: 'cover', objectPosition: 'center'  }}
              src="/down.webp"
              alt=""
              width={359}
              height={659}
            />
            <Image className={styles.image}
              src="/old_women.webp"
              alt=""
              width={299}
              height={289}
            />
          </div>
        </div>
      </div>

      <div className={styles.background}></div>

      <div className={styles.testimonial}>
        <div className={styles.left_2}>
        {
            ( window.innerWidth < 601 ) ? (
              <>
              <h1 className={styles.text_1}>See what people has to say about us</h1>
              </>
            ) : (
              <>
              <h1 className={styles.text_1}>See what people has to say <br />about us</h1>
              </>
            )
          }
        </div>
        <div className={styles.right_2}>
          <div className={styles.carousal_container}>
            <div className={styles.wrapper} style={{ transform: `translateX(-${(num) * width}px)` }}>
              <div className={styles.slide_card}>
                <div className={styles.text_2}>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</div>
                <div className={styles.person}>Kim Lexington</div>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.text_2}>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</div>
                <div className={styles.person}>Kim Lexington</div>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.text_2}>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</div>
                <div className={styles.person}>Kim Lexington</div>
              </div>
              <div className={styles.slide_card}>
                <div className={styles.text_2}>“I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”</div>
                <div className={styles.person}>Kim Lexington</div>
              </div>
            </div>
            <Image className={styles.chev_left}
              src="/left-chevron.svg"
              alt=""
              width={28}
              height={28}
              onClick={backward}
            />
            <Image className={styles.chev_right}
              src="/right-chevron.svg"
              alt=""
              width={28}
              height={28}
              onClick={forward}
            />
          </div>
        </div>
      </div>

      <div className={styles.followus}>
        <div className={styles.header}>
          <div className={styles.circle}></div>
          <div className={`${styles.heading} ${styles.heading_1}`} style={{ marginTop: '0px' }}>Follow Us @dandy.campres</div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.demo_card}>
          <Image className={styles.gallery_img}
            src="/bg1.avif"
            alt=""
            width={289}
            height={300}
          />
          <div className={`${styles.overlay} ${styles.overlay_1}`} style={{ borderRadius: '16px' }}>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com, #camping, #RV, #trip, #outdoor</div>
          </div>
          <div className={styles.demo_card}>
          <Image className={styles.gallery_img}
            src="/bg2.avif"
            alt=""
            width={289}
            height={300}
          />
          <div className={`${styles.overlay} ${styles.overlay_1}`} style={{ borderRadius: '16px' }}>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com, #camping, #RV, #trip, #outdoor</div>
          </div>
          <div className={styles.demo_card}>
          <Image className={styles.gallery_img}
            src="/bg3.avif"
            alt=""
            width={289}
            height={300}
          />
          <div className={`${styles.overlay} ${styles.overlay_1}`} style={{ borderRadius: '16px' }}>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com, #camping, #RV, #trip, #outdoor</div>
          </div>
          <div className={styles.demo_card}>
          <Image className={styles.gallery_img}
            src="/bg4.avif"
            alt=""
            width={289}
            height={300}
          />
          <div className={`${styles.overlay} ${styles.overlay_1}`} style={{ borderRadius: '16px' }}>@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com, #camping, #RV, #trip, #outdoor</div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.left_3}>
          <div className={styles.div_1}>
          <ul>
            <li className={styles.user_section}>
            <Image
            src="/pf.svg"
            alt=""
            width={40}
            height={40}
            />
            <div className={styles.details}>
            <p className={styles.username} style={{ color: '#000', fontSize: '20px' }}>Dandy Campers</p>
            <p className={styles.role} style={{ color: '#000', fontSize: '18px' }}>RV Rentals</p>
            </div>
            </li>
            <li className={styles.footer_li} style={{ marginTop: '24px' }}>500 Terry Francine Street</li>
            <li className={styles.footer_li}>San Francisco, CA 94158</li>
            <li className={styles.footer_li}>info@mysite.com</li>
            <li className={styles.footer_li}>123-456-7890</li>
          </ul>
          <ul className={styles.footer_nav}>
            <li className={styles.footer_li}>RV's</li>
            <li className={styles.footer_li}>Road Trips</li>
            <li className={styles.footer_li}>FAQ</li>
            <li className={styles.footer_li}>About</li>
          </ul>
          </div>
          <div className={styles.copyright}>© 2035 by Dandy Campers. Powered and secured by Wix</div>
        </div>
        <div className={styles.right_3}>
          <div className={styles.heading} style={{ marginTop: '0px', width: 'auto', marginBottom: '24px' }}>Contact Us</div>
          <label for="First Name" className={styles.label}>First Name*</label>
          <input className={styles.input} type="text" spellCheck="false"></input>
          <label for="Last Name" className={styles.label}>Last Name*</label>
          <input className={styles.input} type="text" spellCheck="false"></input>
          <label for="E-Mail" className={styles.label}>E-Mail*</label>
          <input className={styles.input} type="email" spellCheck="false"></input>
          <label for="Subject" className={styles.label}>Subject*</label>
          <input className={styles.input} type="text" spellCheck="false"></input>
          <div className={styles.btn_div}>
            <button className={styles.form_button}>Submit</button>
          </div>
        </div>
      </div>

    </main>
  );
}
