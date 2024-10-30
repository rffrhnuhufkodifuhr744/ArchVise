import React from 'react';
import styles from './BeginingOfCourse.module.css';
import FloatHeader from '../FloatHeader/FloatHeader';

const BeginingOfCourse = () => {
    return (
        <div>
            <FloatHeader />
            <h1 className={styles.h1Logo}>Уроки Blender 3D для початківців</h1>
            <div className={styles.infoContainer}>
                <p>
                    Blender – професійне вільне та відкрите програмне забезпечення для створення тривимірної
                    комп'ютерної графіки, що включає засоби моделювання, скульптингу, анімації, симуляції, рендерингу,
                    постобробки та монтажу відео зі звуком, компонування за допомогою «вузлів» (Node Compositing), а
                    також створення 2D анімацій.
                </p>
                <p>
                    В даний час користується великою популярністю серед безкоштовних 3D-редакторів у зв'язку з його
                    швидким стабільним розвитком та технічною підтримкою. Характерною особливістю пакету Blender є його
                    невеликий розмір, порівняно з іншими популярними пакетами для 3D-моделювання.
                </p>
                <div className={styles.shortList}>Короткий список можливостей Blender</div>
                <div className={styles.shortListInfo}>
                    <p>
                        <strong>3D моделювання</strong> – користувачі можуть створювати тривимірні елементи зі звичайних
                        моделей. Великий набір інструментів дозволяє створювати реалістичні персонажі для комп'ютерних
                        ігор та інших цілей.
                    </p>
                    <p>
                        <strong>Анімації</strong> – за допомогою програми можна анімувати як прості, так і складні рухи.
                        Також можна реалізувати динамічні об'єкти, їхню взаємодію один з одним.
                    </p>
                    <p>
                        <strong>Ефекти</strong> – користувачі мають можливість використовувати різноманітні ефекти, які
                        максимально наближені до реальних, наприклад, як вода ллється, майорить прапор на вітрі.
                    </p>
                    <p>
                        <strong>Опція малювання</strong> – у цій програмі можна навіть робити нариси за допомогою різних
                        видів кистей. Далі малюнки можна використовуватиме створення анімації.
                    </p>
                </div>
                <div className={styles.hotKeys}>Гарячі клавіші Blender</div>
                <ul className={styles.listHotKeys}>
                    <li>
                        <strong>ПКМ</strong> – виділити;
                    </li>
                    <li>
                        <strong>Shift + A</strong> - додати об'єкт;
                    </li>
                    <li>
                        <strong>Х</strong> — видалити;
                    </li>
                    <li>
                        <strong>Пробіл</strong> - здійснити пошук за функціями;
                    </li>
                    <li>
                        <strong>Ctrl + S</strong> - зберегти файл;
                    </li>
                    <li>
                        <strong>F12</strong> - зробити рендеринг;
                    </li>
                    <li>
                        <strong>Esc</strong> – зупинити рендеринг;
                    </li>
                    <li>
                        <strong>F3</strong> – зберегти рендеринг;
                    </li>
                    <li>
                        <strong>Ctrl + Z</strong> - скасувати;
                    </li>
                    <li>
                        <strong>Ctrl + Shift + Z</strong> - повернути дію;
                    </li>
                    <li>
                        <strong>Shift + D</strong> - дублювати;
                    </li>
                    <li>
                        <strong>M</strong> - перемістити на шар;
                    </li>
                    <li>
                        <strong>Ctrl + M</strong> - віддзеркалити;
                    </li>
                    <li>
                        <strong>Alt+A</strong> — програти анімацію.
                    </li>
                </ul>
                <div className={styles.blenderFunc}>Blender: функції програми</div>
                <p className={styles.pFunc}>
                    Програма Blender 3D буде цікавою і корисною не тільки професіоналам, а й новачкам. Які ж функції має
                    цей редактор?
                </p>
                <ul className={styles.blenderFuncList}>
                    <li>Кросплатформова англійська версія.</li>
                    <li>
                        Велика кількість вбудованих примітивів: криві Безьє, полігональні моделі, векторні шрифти,
                        система швидкого моделювання в режимі subdivision surface, NURBS поверхні, метасфери,
                        скульптурне моделювання.
                    </li>
                    <li>Вбудовані інструменти рендерингу та інтеграція з YafRay, LuxRender та ін.</li>
                    <li>
                        Набір інструментів анімації: інверсна кінематика, динаміка м'яких та твердих тіл (на базі
                        Bullet), нелінійна анімація, скелетна анімація та сіточна деформація, редагування вагових
                        коефіцієнтів вершин, обмежувачі тощо.
                    </li>
                    <li>
                        Blender 3D використовує Python для створення інструментів та прототипів, системи логіки в іграх,
                        руху файлів, автоматизації.
                    </li>
                    <li>Базове поєднання відео.</li>
                    <li>
                        У редакторі є Game Blender, що реалізує інтерактивні функції (визначення колізій, двигун
                        динаміки, програмована логіка).
                    </li>
                    <li>Створення додаткових real-time програм.</li>
                </ul>
                <p className={styles.pFunc}>
                    Інтерфейс, яким володіє 3D редактор, не можна назвати простим. Він далекий від стандартного, тому
                    вам доведеться розібратися, як скористатися. Є спеціальні уроки, які можна скачати через торрент або
                    переглянути онлайн.
                </p>
                <p className={styles.pFunc}>
                    Гарячі клавіші відповідають певним функціям. Є об'єктний режим (окремі об'єкти) та Режим редагування
                    (робота з даними об'єкта). Майже всі маніпуляції виконуються за допомогою клавіатури.
                </p>
                <div className={styles.mainWindow}>Головне вікно програми</div>
                <p className={styles.mainWindowP}>Перелічимо ще кілька важливих особливостей програми:</p>
                <ul className={styles.mainWindowUl}>
                    <li>Об'єкти та їх дані поділені.</li>
                    <li>Внутрішня файлова система</li>
                    <li>
                        Різні елементи, об'єкти, плагіни, матеріали, шаблони, текстури, звуки, зображення зберігаються у
                        єдиний ".blend" файл.
                    </li>
                    <li>Можливість експорту в такі формати, як obj, dxf, stl, 3ds та ін.</li>
                    <li>
                        Колірні схеми, прозорі плаваючі елементи - поспішіть оновити програмне забезпечення, остання
                        версія може вас здивувати своїми нововведеннями.
                    </li>
                </ul>
                <table className={styles.infoTable}>
                    <thead>
                        <tr>
                            <th>Офіційний сайт</th>
                            <th>Підтримувані версії</th>
                            <th>Ліцензія</th>
                            <th>Українська мова</th>
                            <th>Оновлено</th>
                            <th>Кількість завантажень</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Blender Foundation</td>
                            <td>Windows 7, 10, 8, XP, Vista</td>
                            <td>Безкоштовно</td>
                            <td>Присутня</td>
                            <td>2024-07-16</td>
                            <td>678933</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BeginingOfCourse;