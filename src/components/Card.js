import styles from '@/styles/Card.module.css'; // Assuming your module CSS is named Card.module.css
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

export default function Card({ user }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.card}>
      <img src={"http://www.ikozmik.com/Content/Images/uploaded/its-free-featured.jpg"} alt="User" className={styles.image} />
      <h2 className={styles.userName}>{user.first_name} {user.last_name}</h2>
      <p className={styles.userAddress}><span>📍</span> {user.city}</p>

      <hr className={styles.line} />

            <div className={styles.detailsContainer}>
        <div className={styles.userInfo}>
      <p className={styles.userPhone}><span className='icon'>📞</span> {user.contact_number}</p>
      <p className={styles.info}>Available on Phone</p>
  </div>
        <div className={styles.buttonContainer}>
        <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <button className={styles.fetchButton}>
      Fetch Details
    </button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>{user.first_name} {user.last_name}</DialogTitle>
      <DialogDescription>
        <br />
        <img src={"http://www.ikozmik.com/Content/Images/uploaded/its-free-featured.jpg"} alt={`${user.firstName} ${user.lastName}`} className={styles.profileImage} />
        <br />
        Location: {user.city}
        <br />
        Contact Number: {user.contact_number}
      </DialogDescription>
    </DialogHeader>
    <button
      onClick={() => setOpen(false)}
      className={styles.closeButton}
    >
      Close
    </button>
  </DialogContent>
</Dialog>

        </div>
      </div>
    </div>
  );
}
