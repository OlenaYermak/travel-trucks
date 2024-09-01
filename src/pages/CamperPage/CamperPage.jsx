import {
  useParams,
  NavLink,
  Outlet,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Suspense } from "react";
import CamperCardMore from "../../components/CamperCardMore/CamperCardMore.jsx";
import Container from "../../components/Container/Container.jsx";
import SectionReservationForm from "../../components/SectionReservationForm/SectionReservationForm.jsx";
import TitleH3 from "../../components/TitleH3/TitleH3.jsx";

import style from "./CamperPage.module.css";

const CamperPage = () => {
  const { id } = useParams();
  const location = useLocation();

  const isRoot = location.pathname === `/catalog/${id}`;

  return (
    <>
      <title>Camper page</title>

      <div className={style.camperPage}>
        <Container>
          <CamperCardMore id={id} />
          <div>
            <ul className={style.moreDetailsList}>
              <li className={style.moreDetailsItem}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.active}` : ""
                  }
                  to="features"
                >
                  <TitleH3 text={"Features"} className={style.title} />
                </NavLink>
              </li>
              <li className={style.moreDetailsItem}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${style.active}` : ""
                  }
                  to="reviews"
                >
                  <TitleH3 text={"Reviews"} />
                </NavLink>
              </li>
            </ul>
          </div>

          {isRoot && <Navigate to="features" replace />}

          <div className={style.detailsFormWrapper}>
            <Suspense fallback={<div>Please wait, loading page...</div>}>
              <Outlet context={{ id }} />
            </Suspense>
            <SectionReservationForm />
          </div>
        </Container>
      </div>
    </>
  );
};

export default CamperPage;
