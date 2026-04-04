# 📅 April 3 – Cyber Security Learning Log  

---

## 🖥️ Hardware Components Required for a Network  

A computer network works only when different **hardware components** interact together.  
Each device has a specific role in ensuring **data is transmitted efficiently and securely**.  

---

## 📡 Router  

A **router** is a device that connects **multiple networks** (like your home network to the internet).  
It acts like a **traffic manager**, deciding where each data packet should go.  

---

### 🔹 How a Router Works  
- Receives data packets from devices  
- Checks destination IP address  
- Chooses the best path  
- Forwards data to the next network  

---

### 🔹 Functions  
- Connects **LAN to the Internet (WAN)**  
- Assigns IP addresses using **DHCP**  
- Performs **Network Address Translation (NAT)**  
- Provides basic **firewall protection**  

---

### 🔹 Example  
When you open Google:  
- Router sends your request to the internet  
- Receives response and sends it back to your device  

---

## 🔀 Switch  

A **switch** connects devices **within the same network (LAN)** like computers, printers, and servers.  

Unlike a hub, a switch is **smart** — it sends data only to the intended device.  

---

### 🔹 How a Switch Works  
- Uses **MAC addresses**  
- Maintains a **MAC address table**  
- Sends data only to the correct port  

---

### 🔹 Functions  
- Enables device-to-device communication  
- Reduces unnecessary traffic  
- Improves network performance  
- Minimizes collisions  

---

### 🔹 Example  
If Computer A sends data to Computer B:  
- Switch sends it only to B (not all devices)  

---

## 🌐 Modem  

A **modem (Modulator-Demodulator)** connects your network to your **Internet Service Provider (ISP)**.  

It converts signals so that data can travel over communication lines.  

---

### 🔹 How a Modem Works  
- Converts **digital → analog** (sending data)  
- Converts **analog → digital** (receiving data)  

---

### 🔹 Functions  
- Establishes internet connection  
- Communicates with ISP infrastructure  
- Acts as a bridge between **router and ISP**  

---

### 🔹 Types of Modems  
- DSL Modem  
- Cable Modem  
- Fiber (ONT)  

---

## 💻 Network Interface Card (NIC)  

A **NIC (Network Interface Card)** allows a device to connect to a network.  

Every device (laptop, phone, server) must have a NIC to communicate.  

---

### 🔹 How NIC Works  
- Converts data into signals  
- Sends/receives data over network  

---

### 🔹 Functions  
- Provides **wired (Ethernet) or wireless (Wi-Fi)** connectivity  
- Contains a unique **MAC address**  
- Enables communication between devices  

---

### 🔹 Example  
- Laptop Wi-Fi adapter  
- Ethernet port in a PC  

---

## 📊 Creating Network Traffic  

**Network traffic** is the flow of data across a network when devices communicate.  

---

### 🔹 How Traffic is Created  

Every action you perform online generates traffic:  

- 🌐 Opening websites (HTTP/HTTPS)  
- 📧 Sending emails  
- 🎥 Streaming videos (YouTube, Netflix)  
- 📥 Downloading files  
- ☁️ Cloud usage  

---

### 🔹 Types of Network Traffic  

#### 📥 Inbound Traffic  
- Data coming **into your network**  
- Example: Loading a webpage  

#### 📤 Outbound Traffic  
- Data going **out of your network**  
- Example: Sending a request to a server  

---

### 🔹 Why Traffic Matters in Cyber Security  
- Helps detect **attacks (DDoS, malware)**  
- Used in **network monitoring**  
- Important for **firewalls & intrusion detection systems**  

---

## 📤 Sending Data to an Internet Service Provider (ISP)  

This explains how data travels from your device to the internet.  

---

## 🔄 Step-by-Step Data Flow  

### 1️⃣ User Request  
- User performs an action  
👉 Example: Opens a website  

---

### 2️⃣ Data Packet Creation  
- Data is broken into **small packets**  
- Each packet contains:
  - Source IP  
  - Destination IP  
  - Data  

---

### 3️⃣ NIC Transmission  
- NIC converts data into signals  
- Sends it to the router  

---

### 4️⃣ Router Processing  
- Router checks destination IP  
- Decides best route  
- Forwards data to modem  

---

### 5️⃣ Modem Conversion  
- Converts digital signals into form usable by ISP  
- Sends data through ISP line  

---

### 6️⃣ ISP Handling  
- ISP receives packets  
- Routes them across the internet  
- Sends them to the destination server  

---

## 🌍 Real-Life Data Flow Example  

When you open a website:  

1. You type URL  
2. Request goes → Router  
3. Router → Modem  
4. Modem → ISP  
5. ISP → Web Server  
6. Server responds back the same path  

---

## 🔐 Cyber Security Perspective  

Understanding hardware helps in:  

- 🔍 Network troubleshooting  
- 🛡️ Detecting unauthorized devices  
- 🚫 Preventing attacks (MITM, spoofing)  
- 📊 Monitoring traffic  

---

## ✅ Final Summary  

- **Router** → Connects networks & routes data  
- **Switch** → Connects devices inside LAN  
- **Modem** → Connects network to ISP  
- **NIC** → Enables device connectivity  
- **Network Traffic** → Data flow across network  
- **ISP Process** → Data travels step-by-step through devices  

---

## 🚀 Next Steps  

- Learn about **IP Addressing (IPv4 vs IPv6)**  
- Study **MAC vs IP address difference**  
- Explore **basic networking commands (ping, traceroute)**  
- Understand **firewalls and packet filtering**  

---