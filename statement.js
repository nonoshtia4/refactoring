function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;
  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);
    result += `${play.name}: ${format(thisAmount / 100)} (${perf.audience} seats) \n`;
    thisAmount = amountFor(perf, play);
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${format(totalAmount / 100)}`;
  result += `You earned ${volumeCredits} credits\n`;
  return result;
}

function amountFor(perf, play) {
  let thisAmount = 0;
  switch (play.type) {
    case "tragedy":
      thisAmount = 40000;
      if (perf.audience > 30) {
        thisAmount += 1000 * (perf.audience - 30);
      }
      break;
    case "comedy":
      thisAmount = 30000;
      if (perf.audience > 20) {
        thisAmount += 1000 * (perf.audience - 30);
      }
      break;
    default:
      throw new Error("unknown type: ${play.type}");
  }
  return thisAmount;
}

function volumeCreditsFor(perf) {
  let volumeCredits = 0;
  volumeCredits += Math.max(perf.audience - 30, 0);
  if ("comedy" === playFor(perf).type)
    volumeCredits += Math.floor(perf.audience / 5);
  return volumeCredits;
}
