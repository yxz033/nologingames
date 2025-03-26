/**
 * SEO检查脚本
 * 验证所有页面是否符合SEO最佳实践
 * 
 * 使用方法:
 * node scripts/check-seo.js
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const chalk = require('chalk');

// SEO要求配置
const SEO_REQUIREMENTS = {
  // 基本元数据要求
  basic: {
    title: true,
    description: true,
    alternates: {
      canonical: true
    }
  },
  // Open Graph元数据要求
  openGraph: {
    title: true,
    description: true,
    type: true,
    url: true,
    images: true
  },
  // Twitter卡片要求
  twitter: {
    card: true,
    title: true,
    description: true,
    images: true
  }
};

// 存储报告数据
const report = {
  checked: 0,
  passed: 0,
  warnings: 0,
  errors: 0,
  details: []
};

console.log(chalk.blue('========================================='));
console.log(chalk.blue('          SEO 验证检查工具              '));
console.log(chalk.blue('========================================='));

// 查找所有页面文件
const pageFiles = glob.sync('./src/app/**/page.tsx');
const metadataFiles = glob.sync('./src/app/**/metadata.ts');
const allFiles = [...pageFiles, ...metadataFiles];

console.log(chalk.cyan(`\n找到 ${allFiles.length} 个页面文件\n`));

// 遍历检查每个文件
allFiles.forEach(filePath => {
  report.checked++;
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative('./', filePath);
  
  console.log(chalk.cyan(`检查: ${relativePath}`));
  
  // 检查是否导出元数据
  const hasMetadataExport = content.includes('export const metadata') || 
                           content.includes('export function generateMetadata') || 
                           content.includes('export async function generateMetadata');
  
  if (!hasMetadataExport) {
    report.errors++;
    report.details.push({
      file: relativePath,
      type: 'error',
      message: '没有导出metadata或generateMetadata'
    });
    
    console.log(chalk.red(`  ❌ 错误: 没有导出metadata或generateMetadata`));
    return;
  }
  
  // 基本验证通过
  let warningsInFile = 0;
  
  // 检查元数据内容 (简化版 - 完整版需要解析TypeScript/AST)
  
  // 检查标题
  if (!content.includes('title:') && !content.includes('title =')) {
    report.warnings++;
    warningsInFile++;
    report.details.push({
      file: relativePath,
      type: 'warning',
      message: '未检测到title字段'
    });
    
    console.log(chalk.yellow(`  ⚠️ 警告: 未检测到title字段`));
  }
  
  // 检查描述
  if (!content.includes('description:') && !content.includes('description =')) {
    report.warnings++;
    warningsInFile++;
    report.details.push({
      file: relativePath,
      type: 'warning',
      message: '未检测到description字段'
    });
    
    console.log(chalk.yellow(`  ⚠️ 警告: 未检测到description字段`));
  }
  
  // 检查规范链接
  if (!content.includes('canonical:') && !content.includes('canonical =')) {
    report.warnings++;
    warningsInFile++;
    report.details.push({
      file: relativePath,
      type: 'warning',
      message: '未检测到canonical字段'
    });
    
    console.log(chalk.yellow(`  ⚠️ 警告: 未检测到canonical字段`));
  }
  
  // 检查Open Graph
  if (!content.includes('openGraph:') && !content.includes('openGraph =')) {
    report.warnings++;
    warningsInFile++;
    report.details.push({
      file: relativePath,
      type: 'warning',
      message: '未检测到openGraph配置'
    });
    
    console.log(chalk.yellow(`  ⚠️ 警告: 未检测到openGraph配置`));
  }
  
  // 检查Twitter卡片
  if (!content.includes('twitter:') && !content.includes('twitter =')) {
    report.warnings++;
    warningsInFile++;
    report.details.push({
      file: relativePath,
      type: 'warning',
      message: '未检测到twitter卡片配置'
    });
    
    console.log(chalk.yellow(`  ⚠️ 警告: 未检测到twitter卡片配置`));
  }
  
  // 如果没有警告,则标记为通过
  if (warningsInFile === 0) {
    report.passed++;
    console.log(chalk.green(`  ✅ 通过: 元数据配置符合要求`));
  }
  
  console.log('');
});

// 打印总结报告
console.log(chalk.blue('========================================='));
console.log(chalk.blue('             检查报告                  '));
console.log(chalk.blue('========================================='));
console.log(`检查文件: ${report.checked}`);
console.log(`通过文件: ${chalk.green(report.passed)}`);
console.log(`警告数量: ${chalk.yellow(report.warnings)}`);
console.log(`错误数量: ${chalk.red(report.errors)}`);
console.log(chalk.blue('========================================='));

// 如果有错误,以非零状态码退出
if (report.errors > 0) {
  console.log(chalk.red('\n⛔ SEO检查失败! 请修复上述错误后重试.\n'));
  process.exit(1);
} else if (report.warnings > 0) {
  console.log(chalk.yellow('\n⚠️ SEO检查通过,但有警告需要注意.\n'));
  process.exit(0);
} else {
  console.log(chalk.green('\n✅ SEO检查完全通过!\n'));
  process.exit(0);
}

/**
 * 注意: 此脚本的完整版本应包括:
 * 1. AST解析器,用于准确分析TypeScript代码并检查具体结构
 * 2. 模板检查,确保页面使用了正确的SEO模板
 * 3. 内容检查,验证标题和描述的长度、格式等
 * 4. 图片检查,验证Open Graph图片尺寸和可访问性
 * 5. 规范链接验证,确保URL格式正确
 * 6. 整合到CI/CD流程
 */ 