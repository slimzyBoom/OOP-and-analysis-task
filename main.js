// Base class: User
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  receiveNotification(notification) {
    console.log(`${this.name} received notification: ${notification}`);
  }
}

// Subclass: Student
class Student extends User {
  constructor(id, name, email, studentId) {
    super(id, name, email);
    this.studentId = studentId;
  }

  accessMaterial(material) {
    console.log(`${this.name} accessed material: ${material.title}`);
  }

  displaySchedules(schedules) {
    console.log(`${this.name} schedules:`);
    schedules.forEach((schedule) => console.log(schedule));
  }
}

// Subclass: Lecturer
class Lecturer extends User {
  constructor(id, name, email, staffId) {
    super(id, name, email);
    this.staffId = staffId;
  }

  uploadMaterial(material) {
    console.log(`${this.name} uploaded material: ${material.title}`);
    return material;
  }

  updateSchedule(schedule, updatedDetails) {
    Object.assign(schedule, updatedDetails);
    console.log(`${this.name} updated the schedule: ${schedule.title}`);
  }
}

// Class: Schedule
class Schedule {
  constructor(id, title, dateTime, location) {
    this.id = id;
    this.title = title;
    this.dateTime = dateTime;
    this.location = location;
  }

  displaySchedule() {
    console.log(
      `Schedule: ${this.title}, DateTime: ${this.dateTime}, Location: ${this.location}`
    );
  }
}

// Class: Material
class Material {
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
  }
}

// Example Usage
const schedule1 = new Schedule(
  1,
  "Math Lecture",
  "2025-01-20 10:00",
  "Room 101"
);
const material1 = new Material(1, "Algebra Notes", "Content about algebra...");

const student = new Student(1, "Alice", "alice@example.com", "S12345");
const lecturer = new Lecturer(2, "Dr. Smith", "smith@example.com", "L67890");

// Student actions
student.receiveNotification("Lecture rescheduled to 12 PM.");
student.accessMaterial(material1);
student.displaySchedules([schedule1]);

// Lecturer actions
lecturer.uploadMaterial(material1);
lecturer.updateSchedule(schedule1, {
  dateTime: "2025-01-20 12:00",
  location: "Room 202",
});

// Display schedule details
schedule1.displaySchedule();
