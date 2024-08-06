// الحصول على التاريخ والوقت الحاليين
var currentDate = new Date();

// تنسيق الشهر
var months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
var monthIndex = currentDate.getMonth();
var monthName = months[monthIndex];

// تنسيق الوقت
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var ampm = hours >= 12 ? "pm" : "am";
hours = hours % 12;
hours = hours ? hours : 12; // يعيد ١٢ بدلاً من ٠ عند الظهر
minutes = minutes < 10 ? "0" + minutes : minutes; // إضافة صفر إذا كانت الدقائق أقل من ١٠

// تنسيق اليوم
var day = currentDate.getDate();
var year = currentDate.getFullYear();

// إعداد الصيغة النهائية للتاريخ والوقت
var formattedDateTime =
  monthName + " " + day + ", " + year + " at " + hours + ":" + minutes + ampm;

// عرض التاريخ والوقت في العناصر التي تحمل الكلاس المحددة
var dateTimeDisplays = document.querySelectorAll(".dateTimeDisplay");

dateTimeDisplays.forEach(function (element) {
  element.innerHTML = "<small>" + formattedDateTime + "</small>";
});

document.querySelector("a").addEventListener("click", function (event) {
  console.log("Link clicked!");
});