import React from "react";

const footer = [
  {
    title: "Company",
    path: [
      {
        title: "What We Do",
        link: "#",
      },
      {
        title: "Available Services",
        link: "#",
      },
      {
        title: "Latest Posts",
        link: "#",
      },
      {
        title: "Careers",
        link: "#",
      },
      {
        title: "FAQs",
        link: "#",
      },
    ],
  },
  {
    title: "Customer Service",
    path: [
      {
        title: "Help & Contact Us",
        link: "#",
      },
      {
        title: "Returns & Refunds",
        link: "#",
      },
      {
        title: "Delivery Information",
        link: "#",
      },
      {
        title: "Terms & Conditions",
        link: "#",
      },
    ],
  },
  {
    title: "Social Media",
    path: [
      {
        title: "Twitter",
        link: "#",
      },
      {
        title: "Instagram",
        link: "#",
      },
      {
        title: "Facebook",
        link: "#",
      },
      {
        title: "Pinterest",
        link: "#",
      },
    ],
  },
  {
    title: "Profile",
    path: [
      {
        title: "My Account",
        link: "#",
      },
      {
        title: "Checkout",
        link: "#",
      },
      {
        title: "Order Tracking",
        link: "#",
      },
      {
        title: "Help & Support",
        link: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="pb-10 text-gray-500">
      <div className="flex w-full justify-between">
        {footer.map((item) => (
          <div className="w-[20rem]">
            <h1 className="mb-5 font-semibold">{item.title}</h1>

            <div className="flex flex-col gap-2">
              {item.path.map((data) => (
                <a href={data.link} className="">
                  {data.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center">
        &copy; 2024 ESKIL®. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
