import React from 'react';
import { User, Stethoscope, BedDouble, Clock, Baby, Activity } from 'lucide-react';

export const servicesData = [
  {
    id: "elderly-care",
    title: "Elderly Care",
    icon: <User className="h-7 w-7" />,
    shortDesc: "Compassionate daily assistance, mobility support, and companionship for senior citizens.",
    whoNeedsIt: [
      "Seniors living alone seeking daily assistance",
      "Elderly individuals who need help with personal hygiene",
      "Seniors requiring companionship or mobility support"
    ],
    included: [
      "Assistance with bathing, grooming, and dressing",
      "Mobility and walking support",
      "Medication reminders",
      "Companionship and emotional support",
      "Assistance with feeding"
    ],
    benefits: "Ensures safety, improves mental well-being through companionship, and allows seniors to age comfortably in their own home.",
    image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "patient-care",
    title: "Patient Care",
    icon: <Stethoscope className="h-7 w-7" />,
    shortDesc: "Dedicated clinical support, monitoring, and personal care for patients recovering at home.",
    whoNeedsIt: [
      "Patients discharged from hospitals needing observation",
      "Individuals with chronic illnesses requiring regular monitoring",
      "Patients needing help with basic health activities"
    ],
    included: [
      "Vital signs monitoring (BP, Sugar, Pulse)",
      "Assistance with personal hygiene and sponge baths",
      "Medication administration management",
      "Assistance with commode or bedpan usage",
      "Basic wound care or consultation support"
    ],
    benefits: "Reduces hospital readmission risks and accelerates recovery within a familiar home environment.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "bedridden-care",
    title: "Bedridden Care",
    icon: <BedDouble className="h-7 w-7" />,
    shortDesc: "Specialized hygiene, mobility support, and bedsore prevention for completely bedridden patients.",
    whoNeedsIt: [
      "Paralyzed or stroke-recovery patients",
      "Patients with severe physical disabilities",
      "Terminally ill patients resting in bed"
    ],
    included: [
      "Frequent posture changing to prevent bedsores",
      "Complete bed bath and oral hygiene",
      "Diaper changing and complete bowel management",
      "Feeding through tube or mouth (as directed)",
      "Light massage to improve blood circulation"
    ],
    benefits: "Prevents life-threatening bedsores, maintains absolute hygiene, and ensures comfort for immobilized patients.",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "attendant",
    title: "24/7 Attendant",
    icon: <Clock className="h-7 w-7" />,
    shortDesc: "Round-the-clock professional companionship, monitoring, and aid for critical care needs.",
    whoNeedsIt: [
      "Dementia or Alzheimer's patients requiring constant watch",
      "Patients prone to falling or physical accidents",
      "Families needing respite from continuous caregiving"
    ],
    included: [
      "Continuous 24-hour presence and monitoring",
      "Night-time assistance for bathroom or emergencies",
      "Immediate alert to family/doctors in case of emergency",
      "Seamless shift handovers between attendants",
      "Complete daily routine management"
    ],
    benefits: "Provides absolute peace of mind for family members knowing their loved one is never left unattended.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "mother-baby-care",
    title: "Mother & Baby Care",
    icon: <Baby className="h-7 w-7" />,
    shortDesc: "Post-natal care, baby massage, and recovery assistance for new mothers and their infants.",
    whoNeedsIt: [
      "New mothers needing rest and physical recovery",
      "First-time parents requiring guidance",
      "Premature babies needing careful handling"
    ],
    included: [
      "Traditional baby massage and bathing",
      "Mother's physical recovery support and massage",
      "Assistance with breastfeeding routines",
      "Monitoring baby's sleep and feeding schedules",
      "Sterilization of baby equipment"
    ],
    benefits: "Allows the mother to recover fully while ensuring the newborn receives expert, hygienic care.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "post-surgery-care",
    title: "Post-Surgery Care",
    icon: <Activity className="h-7 w-7" />,
    shortDesc: "Expert assistance with dressing, medication, rehabilitation, and transitioning post-operation.",
    whoNeedsIt: [
      "Orthopedic surgery patients (knee/hip replacement)",
      "Cardiac or neurosurgery recovering patients",
      "Individuals with restricted physical movement post-op"
    ],
    included: [
      "Surgical wound care and dressing updates",
      "Pain management and medication adherence",
      "Assistance with prescribed physiotherapy exercises",
      "Fall prevention during limited mobility phases",
      "Nutritional diet adherence"
    ],
    benefits: "Minimizes the risk of post-operative infections and drastically shortens overall recovery time.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop"
  }
];
