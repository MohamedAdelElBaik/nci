import { Income } from './Income';
import ItemsStatus from './ItemsStatus';
import { SalesGraph } from './SalesGraph';
import StokeTable from './StokeTable';
import TopSelling from './TopSelling';
import style from './page.module.css';

export default function Dashboard() {
  return (
    <section className={style.container}>
      <div className={style.box1}>
        <ItemsStatus />
      </div>
      <div className={style.box2}>
        <SalesGraph />
      </div>
      <div className={style.box3}>
        <Income />
      </div>
      <div className={style.box4}>
        <Income />
      </div>
      <div className={style.box5}>
        <TopSelling />
      </div>
      <div className={style.box6}>
        <StokeTable />
      </div>
    </section>
  );
}
