function calculateSalesTarget(startDate, endDate, totalTarget) {
    const daysBetween = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)); // Calculate the number of days between start and end date
  
    const workingDays = daysBetween * 5 / 7; // Assume 5 working days in a week
  
    const dailyTarget = totalTarget / workingDays; // Calculate the daily target sales
  
    return dailyTarget;
  }
  
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2023-02-01');
  const totalTarget = 5220;
  
  const dailySalesTarget = calculateSalesTarget(startDate, endDate, totalTarget);
  
  console.log(`Daily sales target: ${dailySalesTarget.toFixed(2)}$`);