// mini bot 
// TASK 1: DevOps Log Filter
let allLogs = ["INFO: Start", "ERROR: DB Fail", "INFO: End"];
let errors = allLogs.filter(log => log.toLowerCase().includes("error"));
console.log("Found Errors:", errors);

// TASK 2: Security Sanitizer
let input = "<script>alert('xss')</script>";
if (input.toLowerCase().includes("script")) {
    console.log("ALERT: Hacking attempt blocked!");
}

// TASK 3: Cloud Data Extraction
let serverList = [
    { id: "i-123", status: "unactive" },
    { id: "i-456", status: "active" }
];
let unactiveServers = serverList.filter(s => s.status === "unactive");

// Destructuring (Pehla unactive server nikalna)
if (unactiveServers.length > 0) {
    let { id } = unactiveServers[0]; 
    console.log("Unactive Server ID:", id);
}