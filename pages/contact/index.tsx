import React from 'react'
import DefaultLayout from "@layout/DefaultLayout";
import { ContactPage } from '@components/ContactPage';

const Contact = () => {
  return (
    <DefaultLayout isMain>
      <ContactPage/>
    </DefaultLayout>
  );
}
export default Contact
