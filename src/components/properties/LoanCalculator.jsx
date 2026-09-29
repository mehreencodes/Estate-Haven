import { useState, useMemo } from "react";
import { Calculator, ChevronDown, ChevronUp } from "lucide-react";

// Tries to pull a plain number out of price strings like
// "PKR 8,500,000" or "PKR 8.5 Crore" or "PKR 85 Lakh".
// If it can't confidently parse it, returns null so the user can type it manually.
function parsePriceToNumber(priceStr) {
  if (!priceStr) return null;
  const clean = priceStr.toString().toLowerCase();
  const num = parseFloat(clean.replace(/[^0-9.]/g, ""));
  if (isNaN(num)) return null;
  if (clean.includes("crore")) return num * 10000000;
  if (clean.includes("lakh") || clean.includes("lac")) return num * 100000;
  return num; // assume it's already a full number (commas stripped)
}

function formatPKR(num) {
  if (!num || isNaN(num)) return "PKR 0";
  return "PKR " + Math.round(num).toLocaleString("en-PK");
}

function LoanCalculator({ propertyPrice }) {
  const [isOpen, setIsOpen] = useState(false);

  const parsedPrice = parsePriceToNumber(propertyPrice);
  const [priceInput, setPriceInput] = useState(parsedPrice || "");
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [tenureYears, setTenureYears] = useState(15);
  const [interestRate, setInterestRate] = useState(18);

  const results = useMemo(() => {
    const price = parseFloat(priceInput) || 0;
    const downPaymentAmount = (price * downPaymentPercent) / 100;
    const loanAmount = price - downPaymentAmount;
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = tenureYears * 12;

    let monthlyInstallment = 0;
    if (loanAmount > 0 && monthlyRate > 0) {
      monthlyInstallment =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    } else if (loanAmount > 0) {
      monthlyInstallment = loanAmount / totalMonths;
    }

    const totalPayment = monthlyInstallment * totalMonths;

    return { downPaymentAmount, loanAmount, monthlyInstallment, totalPayment };
  }, [priceInput, downPaymentPercent, tenureYears, interestRate]);

  return (
    <div className="sidebar-card" style={{ position: "static" }}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "15px",
            fontWeight: 700,
            color: "#0f172a",
          }}
        >
          <Calculator size={18} />
          Installment Calculator
        </span>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && (
        <div style={{ marginTop: "20px" }}>
          <div className="form-group">
            <label className="form-label">Property Price (PKR)</label>
            <input
              type="number"
              className="sidebar-mini-input"
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
              placeholder="Enter property price"
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Down Payment: {downPaymentPercent}%
            </label>
            <input
              type="range"
              min="5"
              max="90"
              step="5"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Loan Tenure</label>
            <select
              className="filter-select"
              style={{ width: "100%" }}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
            >
              {[5, 10, 15, 20, 25].map((y) => (
                <option key={y} value={y}>
                  {y} years
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Interest Rate (%)</label>
            <input
              type="number"
              className="sidebar-mini-input"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              step="0.5"
            />
          </div>

          <div className="key-facts-grid" style={{ gridTemplateColumns: "1fr 1fr", marginTop: "20px" }}>
            <div className="key-fact-item">
              <p className="key-fact-label">Down Payment</p>
              <p className="key-fact-value">{formatPKR(results.downPaymentAmount)}</p>
            </div>
            <div className="key-fact-item">
              <p className="key-fact-label">Loan Amount</p>
              <p className="key-fact-value">{formatPKR(results.loanAmount)}</p>
            </div>
            <div className="key-fact-item" style={{ background: "#0f172a" }}>
              <p className="key-fact-label" style={{ color: "rgba(255,255,255,0.6)" }}>
                Monthly Installment
              </p>
              <p className="key-fact-value" style={{ color: "#ffffff" }}>
                {formatPKR(results.monthlyInstallment)}
              </p>
            </div>
            <div className="key-fact-item">
              <p className="key-fact-label">Total Payment</p>
              <p className="key-fact-value">{formatPKR(results.totalPayment)}</p>
            </div>
          </div>

          <p className="sidebar-safety-note">
            This is an estimate only. Actual bank terms may vary.
          </p>
        </div>
      )}
    </div>
  );
}

export default LoanCalculator;