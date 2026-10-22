/**
 * Nova AI - Landing Page Logic & Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 1. Sticky / Scrolled Header
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = navMenu.classList.contains('open') ? 'x' : 'menu';
      mobileToggle.innerHTML = `<i data-lucide="${icon}"></i>`;
      if (window.lucide) window.lucide.createIcons();
    });

    // Close menu on navigation link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.innerHTML = `<i data-lucide="menu"></i>`;
        if (window.lucide) window.lucide.createIcons();
      });
    });
  }

  // 3. Stats Counter Animation on Scroll
  const statNumbers = document.querySelectorAll('.stat-number');
  let animatedStats = false;

  const animateStats = () => {
    statNumbers.forEach(stat => {
      const target = parseFloat(stat.getAttribute('data-count'));
      const isPercent = stat.textContent.includes('%');
      const isRating = stat.textContent.includes('/5');
      const isK = stat.textContent.includes('k');

      let current = 0;
      const step = target / 40;
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }

        if (isPercent) {
          stat.textContent = current.toFixed(2) + '%';
        } else if (isRating) {
          stat.textContent = current.toFixed(1) + '/5';
        } else if (isK) {
          stat.textContent = Math.round(current) + 'k+';
        } else {
          stat.textContent = Math.round(current);
        }
      }, 35);
    });
  };

  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animatedStats) {
        animateStats();
        animatedStats = true;
      }
    }, { threshold: 0.5 });
    observer.observe(statsSection);
  }

  // 4. Interactive Capability Showcase Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const tabTarget = btn.getAttribute('data-tab');
      const targetPane = document.getElementById(`tab-${tabTarget}`);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });

  // 5. Code Simulation Typing Effect in Interactive Panel
  const runSimButtons = document.querySelectorAll('.run-sim-btn');
  const codeStreamTarget = document.getElementById('code-stream-target');

  const simulationSnippets = {
    code: `// Synthesizing high-concurrency event stream worker
import { WorkerPool, StreamPipeline } from '@nova/mesh';

export const pipeline = new StreamPipeline({
  bufferSize: '64MB',
  compression: 'snappy'
});

pipeline.consume(async (event) => {
  return await WorkerPool.dispatch({
    task: 'vector_embedding',
    payload: event.data
  });
});

console.log('⚡ High-concurrency worker cluster online');`,
    data: `// Autonomous SQL & Metric Synthesizer
SELECT 
  DATE_TRUNC('hour', request_timestamp) as interval,
  AVG(latency_ms) as p50_latency,
  PERCENTILE_CONT(0.99) WITHIN GROUP (ORDER BY latency_ms) as p99_latency
FROM telemetry_logs
WHERE status_code = 200
GROUP BY 1 ORDER BY 1 DESC LIMIT 24;`,
    security: `// Static Analysis Policy Engine
def audit_policy(cluster_manifest):
    rules = [
        require_tls_termination(),
        enforce_read_only_root_filesystem(),
        block_privileged_containers()
    ]
    return all(rule.evaluate(cluster_manifest) for rule in rules)`
  };

  runSimButtons.forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      const codeSnippet = simulationSnippets[target];

      if (codeSnippet && codeStreamTarget) {
        codeStreamTarget.textContent = '';
        let i = 0;
        button.disabled = true;
        button.textContent = 'Simulating...';

        const streamInterval = setInterval(() => {
          codeStreamTarget.textContent += codeSnippet.charAt(i);
          i++;
          if (i >= codeSnippet.length) {
            clearInterval(streamInterval);
            button.disabled = false;
            button.textContent = 'Run Simulation';
            showToast('Simulation completed successfully!');
          }
        }, 15);
      } else {
        showToast(`Simulation started for ${target.toUpperCase()}`);
      }
    });
  });

  // 6. Copy Code Button
  const copyCodeBtn = document.getElementById('copy-code-btn');
  if (copyCodeBtn && codeStreamTarget) {
    copyCodeBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeStreamTarget.textContent).then(() => {
        showToast('Code copied to clipboard!');
      }).catch(() => {
        showToast('Failed to copy to clipboard.');
      });
    });
  }

  // 7. Pricing Toggle (Monthly vs Annual with 20% discount)
  const pricingToggle = document.getElementById('pricing-toggle');
  const priceValues = document.querySelectorAll('.price-val:not(.custom-val)');
  const billingLabels = document.querySelectorAll('.billing-label');

  if (pricingToggle) {
    pricingToggle.addEventListener('change', () => {
      const isAnnual = pricingToggle.checked;
      
      billingLabels.forEach(label => {
        label.classList.toggle('active', (isAnnual && label.classList.contains('annual')) || (!isAnnual && label.classList.contains('monthly')));
      });

      priceValues.forEach(val => {
        const monthly = val.getAttribute('data-monthly');
        const annual = val.getAttribute('data-annual');
        val.textContent = isAnnual ? annual : monthly;
      });
    });
  }

  // 8. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 9. Interactive Interactive Demo Prompt in Hero Window
  const demoInput = document.getElementById('demo-prompt-input');
  const demoSendBtn = document.getElementById('demo-send-btn');

  if (demoInput && demoSendBtn) {
    const handleDemoSubmit = () => {
      const val = demoInput.value.trim();
      if (!val) {
        showToast('Please type a command or prompt first!');
        return;
      }
      showToast(`Nova Synthesizing: "${val}"`);
      demoInput.value = '';
    };

    demoSendBtn.addEventListener('click', handleDemoSubmit);
    demoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleDemoSubmit();
    });
  }

  // 10. Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email-input');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = emailInput.value.trim();
      if (email) {
        showToast(`🎉 Access link sent to ${email}`);
        emailInput.value = '';
      }
    });
  }

  // 11. Modal/Toast Helper Function
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="sparkles" style="color: #a855f7; width: 18px; height: 18px;"></i> <span>${message}</span>`;
    
    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }
});
