<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# Rent-a-Driveway 🎯

## Basic Details

### Team Name: Anju V B

### Team Members
- Member 1: Anju V B - TKM College of Engineering


### Hosted Project Link
rent-a-driveway.vercel.app

### Project Description
A platform that lets homeowners rent out their driveways to drivers looking for convenient parking

### The Problem statement
Finding safe, convenient, and affordable parking is difficult in busy areas

### The Solution
Homeowners can list driveways; drivers can book them for hours

---

## Technical Details

### Technologies/Components Used

**For Software:**

Languages: JavaScript
Frameworks: Next.js, Tailwind CSS
Libraries: Firebase, image-compression
Tools: VS Code, GitHub, Vercel
**For Hardware:**
- Main components: NIL
- Specifications: NIL
- Tools required: NIL

---

## Features

List the key features of your project:

List and rent driveways
Proper Authentication
Apply for parking requests
Dashboard for owners to manage listings

---

## Implementation

### For Software:

#### Installation
npm install

#### Run
npm run dev

### For Hardware:

#### Components Required
NIL

#### Circuit Setup
NIL

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

requests- https://drive.google.com/file/d/1EaXj-et_8IrbEMe_hhEsRWcITDVSz2wg/view?usp=drive_link
rent-driveway- https://drive.google.com/file/d/1b704PUT18cF89jLrfIWe1dUO6KeNuYmM/view?usp=drive_link
index- https://drive.google.com/file/d/1yi1GIhhwZxDjNEo6StiqSXb9uL1IY5YN/view?usp=drive_link
dashboard- https://drive.google.com/file/d/1qkbnnF8pkTEnDG1_DPRVI_rKtAUo-6kl/view?usp=drive_link
#### Diagrams

**System Architecture:**
          +---------------------+
          |   User (Web Client) |
          |  Next.js + Tailwind |
          +----------+----------+
                     |
                     | Interacts (search, book, list)
                     v
          +---------------------+
          |   Frontend Logic    |
          |  Forms, UI, Routing |
          +----------+----------+
                     |
          +----------+----------+
          | Firebase Authentication |
          |   (Sign up / Login)    |
          +----------+----------+
                     |
                     v
          +---------------------+
          |   Firebase Firestore |
          |  Driveways & Requests|
          +----------+----------+
                     |
                     | Stores driveway info + image URLs
                     v
          +---------------------+
          |   Firebase Storage   |
          |   Driveway Images    |
          +---------------------+


**Application Workflow:**
          +---------------------+
          |   User (Web Client) |
          |  Next.js + Tailwind |
          +----------+----------+
                     |
                     | Interacts (search, book, list)
                     v
          +---------------------+
          |   Frontend Logic    |
          |  Forms, UI, Routing |
          +----------+----------+
                     |
          +----------+----------+
          | Firebase Authentication |
          |   (Sign up / Login)    |
          +----------+----------+
                     |
                     v
          +---------------------+
          |   Firebase Firestore |
          |  Driveways & Requests|
          +----------+----------+
                     |
                     | Stores driveway info + image URLs
                     v
          +---------------------+
          |   Firebase Storage   |
          |   Driveway Images    |
          +---------------------+


### For Hardware:

#### Schematic & Circuit

NIL

#### Build Photos

NIL
---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation



##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
https://drive.google.com/file/d/1uC242w-Gwsv_LgnWl95S8_SYos2nvwsD/view?usp=drive_link

## AI Tools Used (Optional - For Transparency Bonus)

ChatGPT: Generated boilerplate React components, helped with Firebase integration, optimized Firestore queries, suggested Tailwind styling improvements.

GitHub Copilot: Assisted in writing repetitive React code, auto-completed form handling and state management.


**Percentage of AI-generated code:** [Approximately 50%]

**Human Contributions:**
Architecture design and planning
Implementing user authentication and Firestore database logic
UI/UX design and Tailwind styling
Integration of image upload and driveway listing
Testing, debugging, and deployment


---

## Team Contributions

Anju V B-Frontend development (React + Tailwind), Firebase integration, UI/UX design, project documentation, deployment, Backend logic (Firestore database rules, request handling), testing and bug fixing,progress tracking, workflow design, team coordination.


## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---

Made with ❤️ at TinkerHub
