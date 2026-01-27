export const slides = [
  {
    title: "Full-Stack E-commerce Platform",
    color: "bg-blue-600/60 border-blue-600",
    key: "fullstack",
    href: "https://github.com/Nickopusan13/Caufi-Website",
    description:
      "A feature-rich e-commerce platform designed for a seamless shopping experience. The responsive frontend is built with Next.js for fast page loads, while the FastAPI backend securely handles products, user accounts, and order processing.",
    images: [
      "/assets/caufi/caufi_1.webp",
      "/assets/caufi/caufi_2.webp",
      "/assets/caufi/caufi_3.webp",
      "/assets/caufi/caufi_4.webp",
    ],
  },
  {
    title: "Automation Pipeline",
    key: "automation",
    color: "bg-green-600/60 border-green-600",
    href: "#",
    description:
      "This Python pipeline automates a complete end-to-end workflow. It's built to handle various tasks, from extracting data and integrating with APIs to processing information automatically. The pipeline is designed to run efficiently and deliver clean, structured data for analysis.",
    images: ["/assets/centris/centris-1.png", "/assets/google_maps/maps-1.png"],
  },
];

export const caufi_slides = {
  title: "Full-Stack E-commerce",
  key: "caufi",
  href: "https://github.com/Nickopusan13/Caufi-Website",
  sections: [
    {
      id: "home",
      title: "Home Page",
      images: [
        "/assets/caufi/home/caufi-home-1.png",
        "/assets/caufi/home/caufi-home-2.png",
        "/assets/caufi/home/caufi-home-3.png",
        "/assets/caufi/home/caufi-home-4.png",
      ],
      description:
        "A responsive homepage built in Next.js, featuring a component-based UI. Key components include a dynamic hero carousel, a CSS Grid/Flexbox product layout populated from data, and a client-side dark mode toggle for state management.",
    },
    {
      id: "shop",
      title: "Shop Page",
      images: [
        "/assets/caufi/shop/caufi-shop-1.png",
        "/assets/caufi/shop/caufi-shop-2.png",
      ],
      description:
        "This Product Listing Page features a multi-faceted filtering system. A collapsible sidebar with state-managed inputs (checkboxes, a price-range slider) dynamically updates the main product grid. The page also includes secondary filter tags, a 'Sort By' dropdown, and client-side pagination.",
    },
    {
      id: "product",
      title: "Product Page",
      images: [
        "/assets/caufi/product/caufi-product-1.png",
        "/assets/caufi/product/caufi-product-2.png",
      ],
      description:
        "This product page features a clean, two-column layout. On the left, an interactive image gallery lets users click thumbnails to change the main product view. On the right, customers can select variants like color and size, add the item to their cart, or buy it instantly. Below, a tabbed section organizes product details and reviews, and a 'Related Product' carousel suggests other items to browse.",
    },
    {
      id: "cart",
      title: "Cart Page",
      images: [
        "/assets/caufi/cart/caufi-cart-1.png",
        "/assets/caufi/cart/caufi-cart-2.png",
      ],
      description:
        "The main area lists all items, allowing customers to easily adjust quantities with plus/minus buttons. Below this, an 'Order Summary' card breaks down the total price, and a 'Voucher' card lets users either type in a discount code or select one from a pop-up list before heading to checkout.",
    },
    {
      id: "profile",
      title: "User Profile Page",
      images: [
        "/assets/caufi/account/caufi-profile-2.png",
        "/assets/caufi/account/caufi-profile-3.png",
        "/assets/caufi/account/caufi-profile-4.png",
        "/assets/caufi/account/caufi-profile-5.png",
      ],
      description:
        "The main Dashboard features a clean, card-based layout, showing key stats at a glance like total customers, orders, and sales. It includes multiple charts for tracking weekly/monthly performance, alert banners for urgent tasks, and a detailed 'Recent Purchases' table with filters. The panel also has comprehensive forms, like the 'Add Product' page, which provides rich text editors for descriptions, a drag-and-drop image uploader, and fields for inventory and pricing.",
    },
    {
      id: "admin",
      title: "Admin Dashboard",
      images: [
        "/assets/caufi/admin/caufi-admin-1.png",
        "/assets/caufi/admin/caufi-admin-2.png",
        "/assets/caufi/admin/caufi-admin-3.png",
        "/assets/caufi/admin/caufi-admin-4.png",
      ],
      description:
        "This 'Add Product' page is a clean form for admins to add new items to the store. It has simple fields for the product name and details, a rich text editor for the description, and a drag-and-drop box to upload images. Admins can also set the price, stock status, and quantity, then publish the product to the store.",
    },
  ],
};

export const automation_slides = {
  title: "Automation Pipeline",
  key: "automation",
  href: "#",
  sections: [
    {
      id: "centris",
      title: "Centris Automation Pipeline",
      images: [
        "/assets/centris/centris-1.png",
        "/assets/centris/centris-2.png",
      ],
      href: "https://www.upwork.com/freelancers/nickopusan?p=1910792468542726144",
      description:
        "This project contains two web scraping scripts for Centris.ca. The first logs into a user account, navigates to the 'My Searches' section, and scrapes all property listings—saving each one’s data as a JSON file and its images in a folder named by property ID. The second script scrapes targeted listings by reading property URLs from an Excel file, visiting each page, and saving the same structured data and images. Both scripts use Scrapy with Playwright for dynamic content handling and reliable data extraction.",
    },
    {
      id: "google_maps",
      title: "Google Maps Automation",
      images: [
        "/assets/google_maps/maps-1.png",
        "/assets/google_maps/maps-2.png",
      ],
      href: "https://www.upwork.com/freelancers/nickopusan?p=1913685149160325120",
      description:
        "The Google Maps Scraper is a Python-based tool designed to extract business information from Google Maps based on a user-provided search query (e.g., 'restaurants in New York'). It leverages asynchronous web scraping with Playwright, processes the raw data for consistency, and provides a graphical user interface (GUI) built with Tkinter. The scraped data is saved as CSV files, both in raw and cleaned formats, making it ready for analysis or further use.",
    },
  ],
};
