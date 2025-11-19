import { DollarSign, ShoppingCart, Building2, ArrowRight } from "lucide-react";

export default function FeatureSections() {
  type ColorKey = "blue" | "green" | "purple";

  type Product = {
    id: string;
    icon: any;
    title: string;
    description: string;
    color: ColorKey;
    features: string[];
  };

  const products: Product[] = [
    {
      id: "payroll",
      icon: DollarSign,
      title: "Payroll System",
      description: "Automate salary processing, tax calculations, and compliance reporting with ease.",
      color: "blue",
      features: [
        "Automated salary calculations",
        "Tax compliance & reporting",
        "Direct deposit integration",
        "Employee self-service portal"
      ]
    },
    {
      id: "pos",
      icon: ShoppingCart,
      title: "POS System",
      description: "Complete point-of-sale solution for retail and hospitality businesses.",
      color: "green",
      features: [
        "Real-time inventory tracking",
        "Multi-payment method support",
        "Sales analytics & reports",
        "Customer loyalty programs"
      ]
    },
    {
      id: "his",
      icon: Building2,
      title: "HIS System",
      description: "Comprehensive healthcare information system for modern medical facilities.",
      color: "purple",
      features: [
        "Electronic health records",
        "Appointment scheduling",
        "Patient portal access",
        "Medical billing integration"
      ]
    }
  ];

  const getColorClasses = (color: ColorKey) =>  {
    const colors: Record<ColorKey, { icon: string; hover: string; text: string }> = {
      blue: {
        icon: "bg-blue-600 text-white",
        hover: "hover:border-blue-200",
        text: "text-blue-600"
      },
      green: {
        icon: "bg-green-600 text-white",
        hover: "hover:border-green-200",
        text: "text-green-600"
      },
      purple: {
        icon: "bg-purple-600 text-white",
        hover: "hover:border-purple-200",
        text: "text-purple-600"
      }
    };
    return colors[color];
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
            Our Products
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Three powerful solutions for your business
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the right solution for your needs. Each product is designed to streamline operations and boost productivity.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            const colors = getColorClasses(product.color);
            
            return (
              <div
                key={product.id}
                className={`bg-white rounded-lg border border-gray-200 p-8 transition-all duration-200 ${colors.hover} hover:shadow-lg`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg ${colors.icon} flex items-center justify-center mb-6`}>
                  <Icon size={24} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-gray-400 mr-3">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <button className={`flex items-center gap-2 text-sm font-semibold ${colors.text} hover:gap-3 transition-all`}>
                  Learn more
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}