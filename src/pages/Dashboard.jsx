import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

export default function Dashboard() {
  // Generate last 6 months dynamically
  const getLastSixMonths = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    const lastSixMonths = [];
    
    for (let i = 5; i >= 0; i--) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      lastSixMonths.push(months[date.getMonth()]);
    }
    
    return lastSixMonths;
  };

  const monthNames = getLastSixMonths();

  // Revenue data over time (dynamically generated for last 6 months)
  const revenueData = monthNames.map((month, index) => ({
    month,
    revenue: 4200 + (index * 850) + Math.floor(Math.random() * 500),
    expenses: 2400 + (index * 280) + Math.floor(Math.random() * 200),
    profit: 1800 + (index * 580) + Math.floor(Math.random() * 300),
  }));

  // User growth data (dynamically generated for last 6 months)
  const userGrowthData = monthNames.map((month, index) => ({
    month,
    users: 890 + (index * 310) + Math.floor(Math.random() * 100),
  }));

  // Sales by category
  const salesByCategory = [
    { name: "Electronics", value: 4500, color: "#3b82f6" },
    { name: "Clothing", value: 3200, color: "#8b5cf6" },
    { name: "Food", value: 2800, color: "#ec4899" },
    { name: "Books", value: 1500, color: "#10b981" },
    { name: "Others", value: 2000, color: "#f59e0b" },
  ];

  // Daily activity
  const activityData = [
    { day: "Mon", orders: 45, visitors: 320 },
    { day: "Tue", orders: 52, visitors: 380 },
    { day: "Wed", orders: 48, visitors: 350 },
    { day: "Thu", orders: 65, visitors: 420 },
    { day: "Fri", orders: 78, visitors: 480 },
    { day: "Sat", orders: 92, visitors: 550 },
    { day: "Sun", orders: 68, visitors: 420 },
  ];

  const stats = [
    {
      label: "Total Revenue",
      value: "$45,280",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "bg-blue-500",
    },
    {
      label: "Active Users",
      value: "2,450",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      label: "Total Orders",
      value: "1,428",
      change: "+23.1%",
      trend: "up",
      icon: ShoppingCart,
      color: "bg-pink-500",
    },
    {
      label: "Conversion Rate",
      value: "3.24%",
      change: "-2.4%",
      trend: "down",
      icon: Activity,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-xl`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-semibold ${
                      stat.trend === "up"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Revenue Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Revenue Overview
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  fill="url(#colorRevenue)"
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stroke="#10b981"
                  strokeWidth={3}
                  fill="url(#colorProfit)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* User Growth Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              User Growth
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ fill: "#8b5cf6", r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sales by Category */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Sales by Category
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={salesByCategory}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {salesByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Weekly Activity */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Weekly Activity
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend />
                <Bar dataKey="orders" fill="#ec4899" radius={[8, 8, 0, 0]} />
                <Bar dataKey="visitors" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
