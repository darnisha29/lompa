// "use client"
// import Dropdown from "@/components/Dropdown/dropdown";
// import Sidebar from "@/components/Sidebar/Sidebar";
// import OrderTabs from "@/components/Tabs/tabs";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { useState } from "react";
// import { Input } from "@/components/ui/input"
// import { ArrowDownUp, Mail } from "lucide-react";
// import { CustomTable } from "@/components/Table/table";

// interface Order {
//   username: string;
//   product: string;
//   variation: string;
//   price: string;
//   paymentMethod: string;
//   status: string;
//   countdown: string;
//   shippingChannel: string;
//   actions: React.ReactNode;
//   [key: string]: React.ReactNode;
// }

// const orders: Order[] = [
//   {
//     username: 'edivanialino110',
//     product: 'Suéter Masculino Tricot Lã Quentinho para o Inverno x1',
//     variation: 'Vermelho Bordô, Único (38 ao 46)',
//     price: 'R$49,90',
//     paymentMethod: 'Pix',
//     status: 'To ship',
//     countdown: 'To avoid late shipment, please arrange drop-off / arrange pickup by 04/09/2024',
//     shippingChannel: 'Shopee Xpress',
//     actions: (
//       <>
//         <Button variant="link" className="text-blue-500">Arrange Shipment</Button>
//         <Button variant="link" className="text-blue-500">Upload Invoice</Button>
//       </>
//     ),
//   },
//   {
//     username: '1302e_b3di',
//     product: 'Blusinha Regata Cropped Modal Trança Moda Verão x2',
//     variation: 'Preto, Único (36 ao 42)',
//     price: 'R$59,80',
//     paymentMethod: 'Pix',
//     status: 'To ship',
//     countdown: 'To avoid late shipment, please arrange drop-off / arrange pickup by 04/09/2024',
//     shippingChannel: 'Shopee Xpress',
//     actions: (
//       <>
//         <Button variant="link" className="text-blue-500">Arrange Shipment</Button>
//         <Button variant="link" className="text-blue-500">View Invoice</Button>
//       </>
//     ),
//   },
// ];


// export default function Home() {
//   const [activeTab, setActiveTab] = useState(0);

//   const handleTabChange = (tabIndex: number) => {
//     setActiveTab(tabIndex);
//     console.log(`Selected Tab: ${tabIndex}`);
//   };
//   const handleSelect = (item: string) => {
//     console.log(`Selected item: ${item}`);

//   };

//   const items = ['Option 1', 'Option 2', 'Option 3'];




//   const columns = [
//     {
//       header: 'Product(s)', accessor: 'product', render: (order: Order) => (
//         <div className="flex items-center">
//           <div className="ml-4">
//             <div className="text-sm font-medium leading-5 text-gray-900">{order.username}</div>
//             <div className="text-sm leading-5 text-gray-500">{order.product}</div>
//             <div className="text-sm leading-5 text-gray-500">{order.variation}</div>
//           </div>
//         </div>
//       )
//     },
//     {
//       header: 'Total Price', accessor: 'price', render: (order: Order) => (
//         <div>
//           <div className="text-sm leading-5 text-gray-900">{order.price}</div>
//           <div className="text-sm leading-5 text-gray-500">{order.paymentMethod}</div>
//         </div>
//       )
//     },
//     {
//       header: 'Status', accessor: 'status', render: (order: Order) => (
//         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
//           {order.status}
//         </span>
//       )
//     },
//     { header: 'Countdown', accessor: 'countdown' },
//     { header: 'Shipping Channel', accessor: 'shippingChannel' },
//     { header: 'Actions', accessor: 'actions' },
//   ];

//   return (
//     <div className="flex gap-11 " >
//       <>
//         <Sidebar />
//       </>
//       <div className="mt-20  mr-10 w-full">
//         <OrderTabs tabs={['All', 'Unpaid', 'To Ship', 'Shipped']} onTabChange={handleTabChange} >
//           <div>All Orders Content</div>
//           <div>Unpaid Orders Content</div>
//           <div>To Ship Orders Content</div>
//           <div>Shipped Orders Content</div>
//         </OrderTabs>

//         <div className=" flex gap-4 mt-5 w-[50%]">
//           <p>Order Status</p>
//           <OrderTabs tabs={['All', 'To process', 'processed']} onTabChange={handleTabChange} rounded={true} >
//             <div className="rounded-md">All</div>
//             <div>To process </div>
//             <div>processed</div>
//           </OrderTabs>
//         </div>
//         <div className="pt-4 flex justify-between ">
//           <div className="flex border border-gray-300 rounded-sm ">
//             <Dropdown items={items} onSelect={handleSelect} /><Input type="text" placeholder="Input Order ID" className="w-[30%] border-none" />
//           </div>
//           <div className="flex gap-5">
//             <Dropdown items={items} onSelect={handleSelect} />
//             <Button variant={'outline'}>Apply</Button>
//             <Button variant={'outline'}>Reset</Button>
//           </div>
//         </div>


//         <div className="mt-10 flex justify-between items-center ">
//           <p className="text-xl">Orders (180)</p>
//           <div className="flex gap-2">
//             <Button variant={'outline'}>
//               <ArrowDownUp className="mr-2 h-4 w-4" /> sort By
//             </Button>
//             <Button variant={'outline'}>
//               <ArrowDownUp className="mr-2 h-4 w-4" /> Mass Upload Invoice
//             </Button>
//             <Button variant={'outline'}>
//               <ArrowDownUp className="mr-2 h-4 w-4" /> Mass Ship
//             </Button>
//           </div>

//         </div>


//         <div className="mt-10">
//         <CustomTable<Order> data={orders} columns={columns} caption="Order Summary" />
//         </div>

//       </div>



//     </div>
//   );
// }

"use client";
import Dropdown from "@/components/Dropdown/dropdown";
import Sidebar from "@/components/Sidebar/Sidebar";
import OrderTabs from "@/components/Tabs/tabs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowDownUp } from "lucide-react";
import { CustomTable } from "@/components/Table/table";

interface Order {
  username: string;
  product: string;
  variation: string;
  price: string;
  paymentMethod: string;
  status: string;
  countdown: string;
  shippingChannel: string;
  actions: React.ReactNode;
  [key: string]: React.ReactNode;
}

const orders: Order[] = [
  {
    username: "edivanialino110",
    product: "Suéter Masculino Tricot Lã Quentinho para o Inverno x1",
    variation: "Vermelho Bordô, Único (38 ao 46)",
    price: "R$49,90",
    paymentMethod: "Pix",
    status: "To ship",
    countdown:
      "To avoid late shipment, please arrange drop-off / arrange pickup by 04/09/2024",
    shippingChannel: "Shopee Xpress",
    actions: (
      <>
        <Button variant="link" className="text-blue-500">
          Arrange Shipment
        </Button>
        <Button variant="link" className="text-blue-500">
          Upload Invoice
        </Button>
      </>
    ),
  },
  {
    username: "1302e_b3di",
    product: "Blusinha Regata Cropped Modal Trança Moda Verão x2",
    variation: "Preto, Único (36 ao 42)",
    price: "R$59,80",
    paymentMethod: "Pix",
    status: "To ship",
    countdown:
      "To avoid late shipment, please arrange drop-off / arrange pickup by 04/09/2024",
    shippingChannel: "Shopee Xpress",
    actions: (
      <>
        <Button variant="link" className="text-blue-500">
          Arrange Shipment
        </Button>
        <Button variant="link" className="text-blue-500">
          View Invoice
        </Button>
      </>
    ),
  },
  
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handleSelect = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  const items = ["Option 1", "Option 2", "Option 3"];

  const columns = [
    {
      header: "Product(s)",
      accessor: "product",
      render: (order: Order) => (
        <div className="flex items-center">
          <div className="ml-4">
            <div className="text-sm font-medium leading-5 text-gray-900">
              {order.username}
            </div>
            <div className="text-sm leading-5 text-gray-500">
              {order.product}
            </div>
            <div className="text-sm leading-5 text-gray-500">
              {order.variation}
            </div>
          </div>
        </div>
      ),
    },
    {
      header: "Total Price",
      accessor: "price",
      render: (order: Order) => (
        <div>
          <div className="text-sm leading-5 text-gray-900">{order.price}</div>
          <div className="text-sm leading-5 text-gray-500">
            {order.paymentMethod}
          </div>
        </div>
      ),
    },
    {
      header: "Status",
      accessor: "status",
      render: (order: Order) => (
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
          {order.status}
        </span>
      ),
    },
    { header: "Countdown", accessor: "countdown" },
    { header: "Shipping Channel", accessor: "shippingChannel" },
    { header: "Actions", accessor: "actions" },
  ];

  const getFilteredOrders = (): Order[] => {
    if (activeTab === 1) return orders.filter(order => order.status === "Unpaid");
    if (activeTab === 2) return orders.filter(order => order.status === "To ship");
    if (activeTab === 3) return orders.filter(order => order.status === "Shipped");
    return orders;
  };

  const filteredOrders = getFilteredOrders();

  return (
    <div className="flex gap-11">
      <Sidebar />
      <div className="mt-20 mr-10 w-full">
        <OrderTabs
          tabs={["All", "Unpaid", "To Ship", "Shipped"]}
          onTabChange={handleTabChange}
        >
          <div>All Orders Content</div>
          <div>Unpaid Orders Content</div>
          <div>To Ship Orders Content</div>
          <div>Shipped Orders Content</div>
        </OrderTabs>

        <div className="flex gap-4 mt-5 w-[50%]">
          <p>Order Status</p>
          <OrderTabs
            tabs={["All", "To process", "processed"]}
            onTabChange={handleTabChange}
            rounded={true}
          >
            <div className="rounded-md">All</div>
            <div>To process</div>
            <div>processed</div>
          </OrderTabs>
        </div>

        <div className="pt-4 flex justify-between">
          <div className="flex border border-gray-300 rounded-sm">
            <Dropdown items={items} onSelect={handleSelect} />
            <Input
              type="text"
              placeholder="Input Order ID"
              className="w-[30%] border-none"
            />
          </div>
          <div className="flex gap-5">
            <Dropdown items={items} onSelect={handleSelect} />
            <Button variant={"outline"}>Apply</Button>
            <Button variant={"outline"}>Reset</Button>
          </div>
        </div>

        <div className="mt-10 flex justify-between items-center">
          <p className="text-xl">Orders (180)</p>
          <div className="flex gap-2">
            <Button variant={"outline"}>
              <ArrowDownUp className="mr-2 h-4 w-4" /> sort By
            </Button>
            <Button variant={"outline"}>
              <ArrowDownUp className="mr-2 h-4 w-4" /> Mass Upload Invoice
            </Button>
            <Button variant={"outline"}>
              <ArrowDownUp className="mr-2 h-4 w-4" /> Mass Ship
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <CustomTable<Order> data={filteredOrders} columns={columns} caption="Order Summary" />
        </div>
      </div>
    </div>
  );
}
