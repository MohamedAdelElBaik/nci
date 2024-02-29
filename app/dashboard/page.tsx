import ItemsStatus from './ItemsStatus';
import style from './page.module.css';

export default function Dashboard() {
  return (
    <section className={style.container}>
      <div className={style.box1}>
        <ItemsStatus />
      </div>
      <div className={style.box2}>
        <h1>box2</h1>
      </div>
      <div className={style.box3}>
        <h1>box3</h1>
      </div>
      <div className={style.box4}>
        <h1>box4</h1>
      </div>
      <div className={style.box5}>
        <h1>box5</h1>
      </div>
      <div className={style.box6}>
        <h1>box6</h1>
      </div>
    </section>
  );
}
