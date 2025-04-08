import React from "react";
import { Form } from "react-router";

export const contactData = async ({ request }) => {
  try {
    const res = await request.formData();
    const data = Object.fromEntries(res);
    console.log(res, request, data);
    return null;
  } catch (err) {
    console.log(err);
  }
};

const Contact1 = () => {
  return (
    <div>
      <Form method="POST" action="/contactTest">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default Contact1;
