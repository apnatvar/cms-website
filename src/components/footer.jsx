import React from 'react';
import { getPayload } from 'payload';
import config from '@/payload.config';
import Link from 'next/link';
import Image from 'next/image';

export default async function Footer() {
  const payload = await getPayload({ config });
  const content = await payload.findGlobal({ slug: 'footer' });
  return (
    <footer className="footer">
      <div className='footer-content contact-info'>
        <p className='address'>sdakfnjsnafjsafsdf{content?.address}</p>
        <p className='phone'>fasdlfjlkasnflsnafnsajkf{content?.phone}</p>
        <p className='email'>sdakfnjsnafjsafsdf{content?.email}</p>
      </div>
      <div className="footer-content logo-image">
        <Image
          src={content?.logo?.url}
          alt={content?.logo?.alt}
          width={100}
          height={100}
        />
        <p className='main-text'>{content?.mainText}</p>
        {/* <p className='owner-text'>Made with ❤️ by <Link href="https://example.com" className='owner-link'>BrownSmith Dynamics</Link></p> */}
      </div>
      <div className='footer-content links'>        
        <ul className='footer-link-list'>
        <li><Link href="/" className="list-content">Home</Link></li>
        <li><Link href="/about" className="list-content">About Us</Link></li>
        <li><Link href="/blog" className="list-content">Blog</Link></li>
        </ul>
      </div>
    </footer>
  );
};

