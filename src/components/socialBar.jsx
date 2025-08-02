import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { getPayload } from 'payload';
import config from '@/payload.config';

export default async function SocialBar(){
  const payload = await getPayload({ config });
  const links = await payload.findGlobal({ slug: 'links' });
  return (
    <div className="social-bar">
      <a href={links.Facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href={links.Instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href={links.Twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href={links.Whatsapp} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      <a href={links.Youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
    </div>
  );
}
