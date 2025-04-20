# Financial Portfolio Dashboard

A modern, responsive dashboard for tracking financial portfolios, built with **Next.js**, **Tailwind CSS**, and **ShadCN UI**.

---

## 🛍 Overview

This dashboard gives you a comprehensive view of your investments:

- 📉 Stock performance over time  
- 📊 Portfolio sector breakdown  
- 📋 Real-time holdings & recent activity  
- 🌗 Dark and light mode support  
- 📱 Fully responsive (mobile-friendly)

---

## ✨ Features

- **Summary Cards** — Portfolio Value, Daily Change, Profit/Loss  
- **Stock Performance Chart** — Line chart visualizing stock trends  
- **Portfolio Allocation** — Pie chart for sector-based allocation  
- **Stocks List** — Table showing current holdings  
- **Recent Transactions** — Latest buy/sell history

---

## 🔧 Tech Stack

- [**Next.js**](https://nextjs.org/) – React framework  
- [**Tailwind CSS**](https://tailwindcss.com/) – Utility-first styling  
- [**ShadCN/UI**](https://ui.shadcn.com) – Prebuilt accessible components  
- [**Recharts**](https://recharts.org/) – Charting library  
- [**next-themes**](https://github.com/pacocoursey/next-themes) – Theme switching

---

## 🚀 Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/tosif121/financial-portfolio-dashboard.git
cd financial-portfolio-dashboard
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the dev server**
```bash
npm run dev
# or
yarn dev
```

4. **Visit** `http://localhost:3000`

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Main dashboard page
│
├── components/
│   ├── dashboard/                # Dashboard components
│   │   ├── Dashboard.tsx
│   │   ├── Layout.tsx
│   │   ├── PortfolioAllocation.tsx
│   │   ├── RecentTransactions.tsx
│   │   ├── StockPerformanceChart.tsx
│   │   ├── StocksList.tsx
│   │   ├── SummaryCard.tsx
│   │   └── ThemeProvider.tsx
│   │
│   ├── layout/                   # Layout structure components
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── MobileHeader.tsx
│   │   └── Sidebar.tsx
│   │
│   └── ui/                       # ShadCN UI components
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── skeleton.tsx
│       ├── tabs.tsx
│       └── tooltip.tsx
```

---

## 🌗 Theme Support

- Theme toggling via `next-themes`
- Automatically respects system settings
- Manual toggle available in the header

---

## 📡 Data Integration

The app currently uses **sample/mock data**.

To integrate real-time financial data:
1. Connect to APIs like Alpha Vantage, IEX Cloud, or Yahoo Finance
2. Replace static mock data in components
3. Add periodic refresh or SWR hooks for live updates

---

## 📄 License

[MIT License](LICENSE)

---

## 👨‍💻 Author

**Tosif Raza**  
GitHub: [@tosif121](https://github.com/tosif121)

---

## 🙌 Acknowledgements

- [ShadCN/UI](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)

