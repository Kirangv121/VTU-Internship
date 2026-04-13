# 📅 April 14 – Cyber Security Learning Log

## 🛡️ Risk Mitigation Strategies
Risk mitigation involves reducing the impact or likelihood of security threats.

### 🔹 Common Strategies:
- 🔐 **Access Control** – Limit access to authorized users only
- 🔄 **Regular Backups** – Prevent data loss during attacks
- 🧱 **Firewalls** – Block unauthorized network access
- 🔍 **Vulnerability Management** – Identify and fix system weaknesses
- 📊 **Monitoring & Logging** – Track system activities
- 🎓 **Security Awareness Training** – Educate users about threats

---

## 🕶️ Network Cloaking Techniques
**Network cloaking** hides network resources and systems from unauthorized users to reduce attack surface.

### 🔹 Techniques:
- 🚫 **Disabling Unused Ports** – Prevent unauthorized entry points
- 👻 **Hiding IP Addresses** – Use NAT or VPNs
- 🔐 **Stealth Mode** – Systems do not respond to unauthorized requests
- 🧩 **Port Knocking** – Ports open only after a specific sequence of requests

### 🔹 Benefits:
- Reduces visibility to attackers
- Prevents reconnaissance activities
- Enhances overall network security

---

## 🚨 Intrusion Detection and Prevention Systems

### 🔍 Intrusion Detection System (IDS)
- Monitors network traffic
- Detects suspicious activities
- Alerts administrators

---

### 🚫 Intrusion Prevention System (IPS)
- Actively blocks detected threats
- Prevents attacks in real-time

### 🔹 Difference:
| Feature | IDS 🔍 | IPS 🚫 |
|--------|--------|--------|
| Action | Detects only | Detects + Prevents |
| Response | Alerts | Blocks threats |
| Placement | Passive | Inline (active) |

---

## 🧱 Security Architecture Models

### 🧅 Onion Model
The **Onion Model** represents security as multiple layers of defense.

#### 🔹 Layers:
- Outer layers: Physical security, network security
- Middle layers: System and application security
- Inner layer: Data protection

#### 🔹 Concept:
- If one layer fails, others still provide protection (**defense in depth**)

---

### 🌿 Artichoke Model
The **Artichoke Model** focuses on protecting each component individually rather than relying on layers.

#### 🔹 Concept:
- Each part (leaf) is secured independently
- No reliance on outer layers
- Strong protection at every level

---

## ⚖️ Onion vs Artichoke Model

| Feature            | Onion Model 🧅        | Artichoke Model 🌿      |
|--------------------|----------------------|------------------------|
| Approach           | Layered security     | Component-based        |
| Dependency         | Layers depend on each other | Independent protection |
| Strategy           | Defense in depth     | Zero-trust-like        |
| Focus              | Perimeter + inner layers | Every component secured |

---

## ✅ Summary
- Risk mitigation reduces the chances and impact of attacks
- Network cloaking hides systems from attackers
- IDS detects threats, IPS prevents them
- Onion model uses layered security, while Artichoke secures each component independently