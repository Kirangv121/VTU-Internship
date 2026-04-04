# 📅 April 2 – Cyber Security Learning Log  

---

## 🧱 Understanding the OSI Model  

The **OSI (Open Systems Interconnection) Model** is a **7-layer conceptual framework** used to understand how data travels across a network.  

It divides the communication process into layers, where each layer performs a specific function.  

---

## 📊 OSI Layers Explained  

### 1️⃣ Physical Layer  
- Transmits **raw bits (0s and 1s)** over a physical medium  
- Deals with hardware like cables and signals  

**Examples:** Ethernet cables, fiber optics  

---

### 2️⃣ Data Link Layer  
- Converts bits into **frames**  
- Handles **error detection**  
- Uses **MAC addresses**  

**Devices:** Switches  

---

### 3️⃣ Network Layer  
- Determines the **best path (routing)**  
- Uses **IP addresses**  

**Devices:** Routers  

---

### 4️⃣ Transport Layer  
- Ensures **reliable data delivery**  
- Performs:
  - Segmentation  
  - Error recovery  
  - Flow control  

**Protocols:** TCP, UDP  

---

### 5️⃣ Session Layer  
- Manages **sessions/connection** between devices  
- Starts and ends communication  

---

### 6️⃣ Presentation Layer  
- Translates data into a readable format  
- Handles:
  - Encryption 🔐  
  - Compression 📦  

---

### 7️⃣ Application Layer  
- Closest to the **end user**  
- Provides network services  

**Examples:** HTTP, FTP, SMTP  

---

## 🧠 Mnemonic to Remember OSI Layers  

**"Please Do Not Throw Sausage Pizza Away"**

| Layer | Name |
|------|------|
| P | Physical |
| D | Data Link |
| N | Network |
| T | Transport |
| S | Session |
| P | Presentation |
| A | Application |

---

## 🌐 Understanding the TCP/IP Model  

The **TCP/IP Model** is the **practical networking model** used on the internet.  
It simplifies OSI into **4 layers**.  

---

## 📊 TCP/IP Layers Explained  

### 1️⃣ Network Interface Layer  
- Combines:
  - Physical Layer  
  - Data Link Layer  
- Handles **hardware transmission**  

---

### 2️⃣ Internet Layer  
- Responsible for:
  - IP addressing  
  - Routing  

**Protocol:** IP  

---

### 3️⃣ Transport Layer  
- Ensures **end-to-end communication**  

**Protocols:**  
- TCP → Reliable  
- UDP → Fast  

---

### 4️⃣ Application Layer  
- Combines:
  - Session  
  - Presentation  
  - Application  

**Protocols:** HTTP, FTP, SMTP, DNS  

---

## 🔄 OSI vs TCP/IP Mapping  

| OSI Model (7 Layers) | TCP/IP Model (4 Layers) |
|---------------------|-------------------------|
| Application         | Application             |
| Presentation        | Application             |
| Session             | Application             |
| Transport           | Transport               |
| Network             | Internet                |
| Data Link           | Network Interface       |
| Physical            | Network Interface       |

---

## ⚖️ OSI vs TCP/IP Comparison  

| Feature              | OSI Model                  | TCP/IP Model              |
|---------------------|---------------------------|---------------------------|
| Type                | Conceptual                | Practical                 |
| Layers              | 7                         | 4                         |
| Developed By        | ISO                       | DARPA                     |
| Usage               | Learning & design         | Real-world networking     |
| Layer Separation    | Strict                    | Flexible                  |
| Protocol Dependency | Independent               | Protocol-based            |

---

## 🔗 Role of Protocols in Communication  

Protocols are **rules that define how data is transmitted and received**.  

---

### 📌 Functions of Protocols  

- 📦 **Data Formatting** – Defines packet structure  
- 📡 **Transmission Control** – Manages communication  
- 🔐 **Error Handling** – Detects and corrects errors  
- 🔄 **Flow Control** – Prevents overload  
- 🧭 **Routing** – Determines best path  

---

## 📚 Common Protocols  

| Protocol | Purpose |
|---------|--------|
| HTTP/HTTPS | Web communication |
| FTP | File transfer |
| TCP | Reliable communication |
| UDP | Fast communication |
| IP | Addressing & routing |
| DNS | Domain to IP conversion |

---

## 🧩 Real-Life Example (Data Flow)  

When you open a website:  

1. Application Layer → You request a webpage  
2. Presentation Layer → Data is encrypted  
3. Session Layer → Session is created  
4. Transport Layer → Data split into packets  
5. Network Layer → Routed using IP  
6. Data Link Layer → Frames created  
7. Physical Layer → Sent as signals  

---

## ✅ Final Summary  

- OSI Model → **7 layers (conceptual learning)**  
- TCP/IP Model → **4 layers (real-world networking)**  
- Protocols → **Rules for communication**  
- Both models explain how **data travels across networks**  

---

## 🚀 Next Steps  

- Learn about **TCP vs UDP in depth**  
- Study **common ports (80, 443, 21, etc.)**  
- Practice with **networking tools (Wireshark, ping, traceroute)**  

---