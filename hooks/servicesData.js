import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";

export const serviceslist = [
  {
    id: 1,
    serviceName: "Full Arms/Legs Polish",
    status: "ONGOING",
    sessionCompleted: "0",
    totalSession: "8",
    price: "4500",
    img: img1,
    session1: {
      sessionNo: "1",
      sessionStatus: "ONGOING",
    },
    session2: {
      sessionNo: "2",
      sessionStatus: "REMAINING",
      btnText: "SCHEDULE NOW",
    },
  },
  {
    id: 2,
    serviceName: "Facial Treatment",
    status: "UPCOMING",
    sessionCompleted: "1",
    totalSession: "6",
    price: "3500",
    img: img2,
    session1: {
      sessionNo: "2",
      sessionStatus: "UPCOMING",
      btnText: "SCHEDULE NOW",
    },
    session2: {
      sessionNo: "3",
      sessionStatus: "REMAINING",
      btnText: "SCHEDULE NOW",
    },
  },
  {
    id: 3,
    serviceName: "Hair Spa",
    status: "COMPLETED",
    sessionCompleted: "6",
    totalSession: "6",
    price: "3000",
    img: img3,
    session1: {
      sessionNo: "2",
      sessionStatus: "COMPLETED",
      btnText: "SCHEDULE NOW",
    },
    session2: {
      sessionNo: "3",
      sessionStatus: "COMPLETED",
      btnText: "SCHEDULE NOW",
    },
  },
  {
    id: 4,
    serviceName: "Pedicure",
    status: "MISSED",
    sessionCompleted: "2",
    totalSession: "4",
    price: "1500",
    img: img4,
    session1: {
      sessionNo: "1",
      sessionStatus: "MISSED",
      btnText: "TRACK NOW",
    },
    session2: {
      sessionNo: "2",
      sessionStatus: "REMAINING",
      btnText: "SCHEDULE NOW",
    },
  },
  {
    id: 5,
    serviceName: "Manicure",
    status: "CANCELLED",
    sessionCompleted: "0",
    totalSession: "4",
    price: "2000",
    img: img5,
    session1: {
      sessionNo: "2",
      sessionStatus: "CANCELLED",
    },
    session2: {
      sessionNo: "3",
      sessionStatus: "REMAINING",
    },
  },
];
