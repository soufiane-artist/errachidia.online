import React from 'react';
import { FaStore, FaUsers, FaHandshake } from 'react-icons/fa';

const Stats = () => {
  return (
    <section id="stats" className="stats-section">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card hidden">
            <i><FaStore /></i>
            <span className="counter" data-target="500">0</span>
            <p>محل تجاري</p>
          </div>
          <div className="stat-card hidden">
            <i><FaUsers /></i>
            <span className="counter" data-target="10000">0</span>
            <p>زائر شهرياً</p>
          </div>
          <div className="stat-card">
            <i><FaHandshake /></i>
            <span className="counter" data-target="300">0</span>
            <p>عميل راضٍ</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
