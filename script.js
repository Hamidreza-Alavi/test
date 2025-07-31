document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu functionality
  const menuBtn = document.getElementById('menu-btn');
  const mobileSidebar = document.getElementById('mobile-sidebar');
  const closeSidebarBtn = document.getElementById('close-sidebar');
  const overlay = document.getElementById('overlay');
  const openSidebarBtn = document.getElementById('open-sidebar');

  function openSidebar() {
    mobileSidebar.classList.add('open');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    mobileSidebar.classList.remove('open');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', openSidebar);
  }
  
  if (openSidebarBtn) {
    openSidebarBtn.addEventListener('click', openSidebar);
  }
  
  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', closeSidebar);
  }
  
  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  // AI Chatbot button interaction
  const aiChatbotBtn = document.getElementById('ai-chatbot-btn');
  if (aiChatbotBtn) {
    aiChatbotBtn.addEventListener('click', () => {
      alert('چت بات هوش مصنوعی به زودی راه‌اندازی خواهد شد!');
    });
  }

  // Main tab switching
  const navLinks = document.querySelectorAll('.nav-link');
  const tabContents = document.querySelectorAll('.tab-content');
  const pageTitle = document.getElementById('page-title');
  
  function switchTab(tabId) {
    // Hide all tab contents
    tabContents.forEach(tab => {
      tab.classList.remove('active');
    });
    
    // Show selected tab content
    const targetTab = document.getElementById(`${tabId}-tab`);
    if (targetTab) {
      targetTab.classList.add('active');
    }
    
    // Update active nav link
    navLinks.forEach(link => {
      link.classList.toggle('bg-white', link.dataset.tab === tabId);
      link.classList.toggle('bg-opacity-20', link.dataset.tab === tabId);
    });
    
    // Update page title
    const titles = {
      'dashboard': 'داشبورد مدیریت تولید',
      'warehouse': 'مدیریت انبار',
      'production': 'ثبت فرآیند تولید',
      'reports': 'گزارش‌ها و آمار',
      'ai': 'هوش مصنوعی',
      'settings': 'تنظیمات'
    };
    if (pageTitle) {
      pageTitle.textContent = titles[tabId] || 'سیستم مدیریت تولید';
    }
    
    // Close mobile menu after tab switch
    closeSidebar();
  }
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = link.dataset.tab;
      if (tabId) {
        switchTab(tabId);
      }
    });
  });
  
  // Initialize with dashboard tab
  switchTab('dashboard');
  
  // Warehouse subtab switching
  const warehouseTabButtons = document.querySelectorAll('[data-subtab]');
  const warehouseSubtabContents = document.querySelectorAll('.subtab-content');
  
  function switchWarehouseSubtab(subtabId) {
    // Hide all subtab contents
    warehouseSubtabContents.forEach(content => {
      content.style.display = 'none';
    });
    
    // Show selected subtab content
    const targetSubtab = document.getElementById(`${subtabId}-subtab`);
    if (targetSubtab) {
      targetSubtab.style.display = 'block';
    }
    
    // Update active subtab button
    warehouseTabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.subtab === subtabId);
      btn.classList.toggle('bg-gray-100', btn.dataset.subtab !== subtabId);
      btn.classList.toggle('text-gray-600', btn.dataset.subtab !== subtabId);
      
      if (btn.dataset.subtab === subtabId) {
        btn.classList.remove('bg-gray-100');
        btn.classList.remove('text-gray-600');
        btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        btn.style.color = 'white';
        btn.style.boxShadow = '0 4px 12px -2px rgba(99, 102, 241, 0.4)';
      } else {
        btn.style.background = '';
        btn.style.color = '';
        btn.style.boxShadow = '';
      }
    });
  }
  
  warehouseTabButtons.forEach(button => {
    button.addEventListener('click', () => switchWarehouseSubtab(button.dataset.subtab));
  });
  
  // Initialize with warehouses subtab
  switchWarehouseSubtab('warehouses');
  
  // Production subtab switching
  const prodTabButtons = document.querySelectorAll('[data-prodsubtab]');
  const prodSubtabContents = document.querySelectorAll('.prodsubtab-content');
  
  function switchProdSubtab(subtabId) {
    prodSubtabContents.forEach(content => {
      content.style.display = 'none';
    });
    const targetSubtab = document.getElementById(`${subtabId}-prodsubtab`);
    if (targetSubtab) {
      targetSubtab.style.display = 'block';
    }
    prodTabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.prodsubtab === subtabId);
      btn.classList.toggle('bg-gray-100', btn.dataset.prodsubtab !== subtabId);
      btn.classList.toggle('text-gray-600', btn.dataset.prodsubtab !== subtabId);
      if (btn.dataset.prodsubtab === subtabId) {
        btn.classList.remove('bg-gray-100');
        btn.classList.remove('text-gray-600');
        btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        btn.style.color = 'white';
        btn.style.boxShadow = '0 4px 12px -2px rgba(99, 102, 241, 0.4)';
      } else {
        btn.style.background = '';
        btn.style.color = '';
        btn.style.boxShadow = '';
      }
    });
  }
  
  prodTabButtons.forEach(button => {
    button.addEventListener('click', () => switchProdSubtab(button.dataset.prodsubtab));
  });
  
  switchProdSubtab('define-process');

  // Reports subtab switching
  const reportTabButtons = document.querySelectorAll('[data-reportsubtab]');
  const reportSubtabContents = document.querySelectorAll('.reportsubtab-content');
  
  function switchReportSubtab(subtabId) {
    reportSubtabContents.forEach(content => {
      content.style.display = 'none';
    });
    const targetSubtab = document.getElementById(`${subtabId}-reportsubtab`);
    if (targetSubtab) {
      targetSubtab.style.display = 'block';
    }
    reportTabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.reportsubtab === subtabId);
      btn.classList.toggle('bg-gray-100', btn.dataset.reportsubtab !== subtabId);
      btn.classList.toggle('text-gray-600', btn.dataset.reportsubtab !== subtabId);
      if (btn.dataset.reportsubtab === subtabId) {
        btn.classList.remove('bg-gray-100');
        btn.classList.remove('text-gray-600');
        btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        btn.style.color = 'white';
        btn.style.boxShadow = '0 4px 12px -2px rgba(99, 102, 241, 0.4)';
      } else {
        btn.style.background = '';
        btn.style.color = '';
        btn.style.boxShadow = '';
      }
    });
  }
  
  reportTabButtons.forEach(button => {
    button.addEventListener('click', () => switchReportSubtab(button.dataset.reportsubtab));
  });
  
  // Initialize with productions report subtab
  switchReportSubtab('productions');

  // Add scroll effect to header
  let lastScrollTop = 0;
  const header = document.querySelector('header');
  
  if (header) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }
      
      lastScrollTop = scrollTop;
    });
  }

  // Add loading animation to cards
  window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.fade-in');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
    });
  });

  // Initialize fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
  });

  // Add touch feedback for mobile
  if ('ontouchstart' in window) {
    document.querySelectorAll('button, a').forEach(el => {
      el.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.95)';
      });
      
      el.addEventListener('touchend', function() {
        this.style.transform = '';
      });
    });
  }

  // Material management functionality
  const addMaterialBtn = document.getElementById('add-material');
  const materialsContainer = document.getElementById('materials-container');

  if (addMaterialBtn && materialsContainer) {
    // Add new material row
    addMaterialBtn.addEventListener('click', () => {
      const materialItem = document.createElement('div');
      materialItem.className = 'material-item flex flex-col sm:flex-row gap-3 items-end';
      materialItem.innerHTML = `
        <div class="flex-1 w-full">
          <label class="block text-sm font-medium text-gray-600 mb-1">نام ماده</label>
          <div class="relative">
            <input type="text" class="material-name w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="جستجو و انتخاب ماده..." list="materials-list">
            <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex-1 w-full">
          <label class="block text-sm font-medium text-gray-600 mb-1">مقدار</label>
          <input type="text" class="material-quantity w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="مثلاً: 100 لیتر">
        </div>
        <button type="button" class="remove-material bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-colors" title="حذف ماده">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
          </svg>
        </button>
      `;
      materialsContainer.appendChild(materialItem);
      
      // Add event listener to new remove button
      const removeBtn = materialItem.querySelector('.remove-material');
      removeBtn.addEventListener('click', () => {
        // Only allow deletion if it's not the first row (keep at least one row)
        const allMaterialItems = materialsContainer.querySelectorAll('.material-item');
        if (allMaterialItems.length > 1) {
          materialItem.remove();
        }
      });
    });

    // Add event listeners to existing remove buttons
    document.querySelectorAll('.remove-material').forEach(btn => {
      btn.addEventListener('click', () => {
        const materialItem = btn.closest('.material-item');
        // Only allow deletion if it's not the first row (keep at least one row)
        const allMaterialItems = materialsContainer.querySelectorAll('.material-item');
        if (allMaterialItems.length > 1) {
          materialItem.remove();
        }
      });
    });
  }

  // Enhanced search functionality for material names
  document.addEventListener('input', (e) => {
    if (e.target.classList.contains('material-name')) {
      const input = e.target;
      const value = input.value.toLowerCase();
      const datalist = document.getElementById('materials-list');
      if (datalist) {
        const options = datalist.querySelectorAll('option');
        
        // Filter options based on input
        options.forEach(option => {
          if (option.value.toLowerCase().includes(value)) {
            option.style.display = '';
          } else {
            option.style.display = 'none';
          }
        });
      }
    }
  });

  // === Settings Tab Logic ===
  function applySettings(settings) {
    // Theme
    if (settings.theme === 'dark') {
      document.body.classList.add('dark');
      document.getElementById('dark-mode-style').innerHTML = `
        body.dark { background: #18181b !important; color: #f3f4f6; }
        .dark .bg-white { background-color: #23272f !important; }
        .dark .text-gray-800 { color: #f3f4f6 !important; }
        .dark .text-gray-700 { color: #e5e7eb !important; }
        .dark .border-gray-100 { border-color: #23272f !important; }
        .dark .bg-gray-50 { background-color: #23272f !important; }
        .dark .bg-gray-100 { background-color: #23272f !important; }
        .dark .bg-gray-200 { background-color: #23272f !important; }
        .dark .bg-gray-900 { background-color: #18181b !important; }
        .dark .bg-gray-800 { background-color: #23272f !important; }
        .dark .dark\:bg-gray-900 { background-color: #18181b !important; }
        .dark .dark\:bg-gray-800 { background-color: #23272f !important; }
        .dark .dark\:text-gray-100 { color: #f3f4f6 !important; }
        .dark .dark\:text-gray-200 { color: #e5e7eb !important; }
        .dark .dark\:border-gray-700 { border-color: #23272f !important; }
      `;
    } else {
      document.body.classList.remove('dark');
      document.getElementById('dark-mode-style').innerHTML = '';
    }
    // Font size
    document.documentElement.style.setProperty('--table-font-size', settings.fontSize || '1rem');
    // Language
    // (For demo, just set dir/language)
    if (settings.language === 'en') {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    } else {
      document.documentElement.lang = 'fa';
      document.documentElement.dir = 'rtl';
    }
    // Minimum inventory (could be used elsewhere)
  }

  function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('app-settings') || '{}');
    // Defaults
    return {
      theme: settings.theme || 'light',
      language: settings.language || 'fa',
      fontSize: settings.fontSize || 'base',
      minInventory: settings.minInventory || '',
    };
  }

  function saveSettings(settings) {
    localStorage.setItem('app-settings', JSON.stringify(settings));
  }

  function updateSettingsUI(settings) {
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const thumb = document.getElementById('theme-toggle-thumb');
    if (settings.theme === 'dark') {
      thumb.style.left = 'calc(100% - 1.75rem)';
      themeToggle.classList.add('bg-gray-700');
      themeToggle.classList.remove('bg-gray-200');
    } else {
      thumb.style.left = '0.25rem';
      themeToggle.classList.add('bg-gray-200');
      themeToggle.classList.remove('bg-gray-700');
    }
    // Language
    document.getElementById('language-select').value = settings.language;
    // Font size
    document.getElementById('font-size-select').value = settings.fontSize;
    // Min inventory
    document.getElementById('min-inventory').value = settings.minInventory;
  }

  const settingsForm = document.getElementById('settings-form');
  if (settingsForm) {
    let settings = loadSettings();
    applySettings(settings);
    setTimeout(() => updateSettingsUI(settings), 100); // Wait for DOM
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
      settings.theme = settings.theme === 'dark' ? 'light' : 'dark';
      applySettings(settings);
      updateSettingsUI(settings);
      saveSettings(settings);
    });
    // Language
    document.getElementById('language-select').addEventListener('change', e => {
      settings.language = e.target.value;
      applySettings(settings);
      saveSettings(settings);
    });
    // Font size
    document.getElementById('font-size-select').addEventListener('change', e => {
      settings.fontSize = e.target.value;
      // For demo, change table font size
      document.documentElement.style.setProperty('--table-font-size', settings.fontSize === 'sm' ? '0.85rem' : settings.fontSize === 'lg' ? '1.15rem' : '1rem');
      saveSettings(settings);
    });
    // Min inventory
    document.getElementById('min-inventory').addEventListener('input', e => {
      settings.minInventory = e.target.value;
      saveSettings(settings);
    });
    // Backup
    document.getElementById('backup-btn').addEventListener('click', () => {
      const data = localStorage.getItem('app-settings') || '{}';
      const blob = new Blob([data], {type: 'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'settings-backup.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
    // Restore
    document.getElementById('restore-btn').addEventListener('click', () => {
      document.getElementById('restore-input').click();
    });
    document.getElementById('restore-input').addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(evt) {
        try {
          const restored = JSON.parse(evt.target.result);
          saveSettings(restored);
          applySettings(restored);
          updateSettingsUI(restored);
          alert('تنظیمات با موفقیت بازیابی شد!');
        } catch {
          alert('فایل نامعتبر است.');
        }
      };
      reader.readAsText(file);
    });
    // Support
    document.getElementById('support-btn').addEventListener('click', () => {
      alert('برای پشتیبانی با شماره 021-12345678 یا ایمیل support@example.com تماس بگیرید.');
    });
    // Save
    settingsForm.addEventListener('submit', e => {
      e.preventDefault();
      saveSettings(settings);
      alert('تنظیمات ذخیره شد!');
    });
  }
});