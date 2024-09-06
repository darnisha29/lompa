import { Button } from "@/components/ui/button";

export interface Order {
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

export const orders: Order[] = [
    {
      username: "arica",
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
      username: "bunny",
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
    {
      username: "cherry",
      product: "Bluetooth Headphones Over-Ear",
      variation: "Black, One Size",
      price: "R$199,90",
      paymentMethod: "Credit Card",
      status: "Shipped",
      countdown:
        "Estimated delivery by 10/09/2024. Track your shipment for updates.",
      shippingChannel: "FedEx",
      actions: (
        <>
          <Button variant="link" className="text-blue-500">
            Track Shipment
          </Button>
          <Button variant="link" className="text-blue-500">
            View Invoice
          </Button>
        </>
      ),
    },
    {
      username: "denial",
      product: "Organic Green Tea Pack",
      variation: "Green, 20 Bags",
      price: "R$29,90",
      paymentMethod: "PayPal",
      status: "To process",
      countdown:
        "Prepare for processing. Ensure address is correct by 05/09/2024.",
      shippingChannel: "DHL",
      actions: (
        <>
          <Button variant="link" className="text-blue-500">
            Process Order
          </Button>
          <Button variant="link" className="text-blue-500">
            View Details
          </Button>
        </>
      ),
    },
    {
      username: "jane_doe456",
      product: "Smartphone Case - Ultra Slim",
      variation: "Red, iPhone 13",
      price: "R$39,90",
      paymentMethod: "Debit Card",
      status: "Delivered",
      countdown:
        "Delivery confirmed. Review your order by 08/09/2024.",
      shippingChannel: "UPS",
      actions: (
        <>
          <Button variant="link" className="text-blue-500">
            Leave Feedback
          </Button>
          <Button variant="link" className="text-blue-500">
            Return Item
          </Button>
        </>
      ),
    },
    {
      username: "alex_jones",
      product: "Gaming Mouse RGB",
      variation: "Black, Wired",
      price: "R$129,90",
      paymentMethod: "Credit Card",
      status: "To ship",
      countdown:
        "Order is ready to be shipped. Confirm shipping details by 06/09/2024.",
      shippingChannel: "TNT",
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
    {
      username: "susan_lee",
      product: "Portable Blender - 500ml",
      variation: "Blue, Battery Operated",
      price: "R$89,90",
      paymentMethod: "Credit Card",
      status: "Unpaid",
      countdown:
        "Payment pending. Complete payment by 07/09/2024 to avoid cancellation.",
      shippingChannel: "EMS",
      actions: (
        <>
          <Button variant="link" className="text-blue-500">
            Complete Payment
          </Button>
          <Button variant="link" className="text-blue-500">
            View Invoice
          </Button>
        </>
      ),
    },
  
   
  ];