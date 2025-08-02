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

  // Settings functionality
  const settingsTabBtns = document.querySelectorAll('.settings-tab-btn');
  const settingsContents = document.querySelectorAll('.settings-content');

  function switchSettingsTab(tabId) {
    // Hide all settings contents
    settingsContents.forEach(content => {
      content.classList.remove('active');
    });
    
    // Show selected settings content
    const targetContent = document.getElementById(`${tabId}-settings`);
    if (targetContent) {
      targetContent.classList.add('active');
    }
    
    // Update active settings tab button
    settingsTabBtns.forEach(btn => {
      btn.classList.remove('active', 'bg-blue-100', 'dark:bg-blue-900', 'text-blue-700', 'dark:text-blue-300');
      btn.classList.add('bg-gray-100', 'dark:bg-gray-600', 'text-gray-600', 'dark:text-gray-300');
    });
    
    const activeBtn = document.querySelector(`[data-settings-tab="${tabId}"]`);
    if (activeBtn) {
      activeBtn.classList.add('active', 'bg-blue-100', 'dark:bg-blue-900', 'text-blue-700', 'dark:text-blue-300');
      activeBtn.classList.remove('bg-gray-100', 'dark:bg-gray-600', 'text-gray-600', 'dark:text-gray-300');
    }
  }

  // Add event listeners to settings tab buttons
  settingsTabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = btn.dataset.settingsTab;
      if (tabId) {
        switchSettingsTab(tabId);
      }
    });
  });

  // Add user form handling
  const addUserForm = document.getElementById('add-user-form');
  if (addUserForm) {
    addUserForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const userName = document.getElementById('user-name').value;
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const userRole = document.getElementById('user-role').value;
      
      if (userName && username && password) {
        // Here you would typically send the data to your backend
        alert(`کاربر جدید "${userName}" با موفقیت اضافه شد!`);
        addUserForm.reset();
        
        // Add to users list (in a real app, this would come from the server)
        const usersTable = document.querySelector('#users-settings tbody');
        if (usersTable) {
          const newRow = document.createElement('tr');
          newRow.className = 'border-b';
          newRow.innerHTML = `
            <td class="px-4 py-2">${userName}</td>
            <td class="px-4 py-2">${username}</td>
            <td class="px-4 py-2"><span class="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">${getRoleText(userRole)}</span></td>
            <td class="px-4 py-2"><span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">فعال</span></td>
            <td class="px-4 py-2">
              <button class="text-blue-600 hover:text-blue-800 ml-2">ویرایش</button>
              <button class="text-red-600 hover:text-red-800">حذف</button>
            </td>
          `;
          usersTable.appendChild(newRow);
        }
      } else {
        alert('لطفاً تمام فیلدها را پر کنید!');
      }
    });
  }

  function getRoleText(role) {
    const roles = {
      'operator': 'اپراتور',
      'manager': 'مدیر',
      'warehouse': 'انباردار',
      'admin': 'مدیر سیستم'
    };
    return roles[role] || role;
  }

  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  
  function updateThemeIcons(isDark) {
    if (isDark) {
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    } else {
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
  }
  
  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
  }
  
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      updateThemeIcons(true);
    } else {
      updateThemeIcons(false);
    }
  }

  // Save settings functionality
  document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.includes('ذخیره تنظیمات') || btn.textContent.includes('اعمال تنظیمات')) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('تنظیمات با موفقیت ذخیره شد!');
      });
    }
  });

  // Backup functionality
  const createBackupBtn = document.querySelector('button:contains("ایجاد پشتیبان")');
  if (createBackupBtn) {
    createBackupBtn.addEventListener('click', () => {
      alert('پشتیبان‌گیری در حال انجام است...');
      setTimeout(() => {
        alert('پشتیبان‌گیری با موفقیت انجام شد!');
      }, 2000);
    });
  }

  const restoreBackupBtn = document.querySelector('button:contains("بازیابی")');
  if (restoreBackupBtn) {
    restoreBackupBtn.addEventListener('click', () => {
      if (confirm('آیا از بازیابی پشتیبان اطمینان دارید؟ این عمل قابل بازگشت نیست.')) {
        alert('بازیابی در حال انجام است...');
        setTimeout(() => {
          alert('بازیابی با موفقیت انجام شد!');
        }, 2000);
      }
    });
  }

  // Test connection buttons
  document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.includes('تست اتصال')) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const originalText = btn.textContent;
        btn.textContent = 'در حال تست...';
        btn.disabled = true;
        
        setTimeout(() => {
          btn.textContent = 'اتصال موفق';
          btn.classList.add('bg-green-600');
          btn.classList.remove('bg-blue-600');
          
          setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('bg-green-600');
            btn.classList.add('bg-blue-600');
            btn.disabled = false;
          }, 2000);
        }, 1500);
      });
    }
  });

  // User permissions handling
  const permissionUserSelect = document.getElementById('permission-user');
  if (permissionUserSelect) {
    permissionUserSelect.addEventListener('change', (e) => {
      const selectedUser = e.target.value;
      if (selectedUser) {
        // In a real app, you would load the user's permissions from the server
        console.log(`Loading permissions for user: ${selectedUser}`);
      }
    });
  }

  // Save permissions button
  const savePermissionsBtn = document.querySelector('button:contains("ذخیره دسترسی‌ها")');
  if (savePermissionsBtn) {
    savePermissionsBtn.addEventListener('click', () => {
      alert('دسترسی‌های کاربر با موفقیت ذخیره شد!');
    });
  }
});