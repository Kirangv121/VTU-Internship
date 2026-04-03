# 📅 April 2 – Cyber Security Learning Log

## 🧱 Understanding the OSI Model
The **OSI (Open Systems Interconnection) Model** is a conceptual framework used to understand how data travels across a network. It consists of **7 layers**, each with a specific function.

### 📊 OSI Layers:
1. **Physical Layer**  
   - Transmits raw bits over a physical medium (cables, signals)

2. **Data Link Layer**  
   - Handles error detection and frames data for transmission

3. **Network Layer**  
   - Determines the best path for data (routing)

4. **Transport Layer**  
   - Ensures reliable data transfer (error recovery, flow control)

5. **Session Layer**  
   - Manages sessions/connection between devices

6. **Presentation Layer**  
   - Translates data (encryption, compression)

7. **Application Layer**  
   - Provides services directly to user applications (HTTP, FTP)

---

## 🌐 Understanding the TCP/IP Model
The **TCP/IP Model** is a practical model used in real-world networking, especially on the internet. It consists of **4 layers**.

### 📊 TCP/IP Layers:
1. **Network Interface Layer**  
   - Combines Physical & Data Link layers  
   - Handles hardware addressing and transmission

2. **Internet Layer**  
   - Responsible for logical addressing and routing (IP)

3. **Transport Layer**  
   - Ensures data delivery (TCP/UDP)

4. **Application Layer**  
   - Combines Session, Presentation, and Application layers  
   - Provides protocols like HTTP, FTP, SMTP

---

## ⚖️ Comparison Between OSI and TCP/IP Architectures

| Feature              | OSI Model (7 Layers)         | TCP/IP Model (4 Layers)        |
|---------------------|-----------------------------|--------------------------------|
| Type                | Conceptual model            | Practical implementation       |
| Number of Layers    | 7                           | 4                              |
| Developed By        | ISO                         | DARPA                          |
| Usage               | Teaching & understanding    | Real-world networking          |
| Layer Separation    | Strict separation           | Less strict                    |
| Protocol Dependency | Protocol independent        | Protocol-based                 |

### 🔍 Key Difference:
- OSI is mainly used for **learning and design**
- TCP/IP is used for **actual communication on the internet**

---

## 🔗 Role of Protocols in Communication
Protocols are a set of rules that define how data is transmitted and received over a network.

### 📌 Functions of Protocols:
- 📦 **Data Formatting** – Defines structure of data packets
- 📡 **Transmission Control** – Manages sending and receiving
- 🔐 **Error Handling** – Detects and corrects errors
- 🔄 **Flow Control** – Ensures smooth data transfer
- 🧭 **Routing** – Determines path for data delivery

### 📚 Common Protocol Examples:
- **HTTP/HTTPS** – Web communication
- **FTP** – File transfer
- **TCP** – Reliable communication
- **UDP** – Fast but less reliable communication
- **IP** – Addressing and routing

---

## ✅ Summary
- OSI model has 7 layers and is used for conceptual understanding
- TCP/IP model has 4 layers and is used in real networks
- Protocols define rules for communication between devices
- Both models help in understanding how data flows across networks