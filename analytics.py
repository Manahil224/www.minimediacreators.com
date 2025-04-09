import pandas as pd
import json
from datetime import datetime

class SocialMediaAnalytics:
    def __init__(self):
        self.data = {
            'posts': [],
            'engagement': [],
            'reach': []
        }
    
    def add_post_data(self, platform, post_type, engagement_rate, reach):
        """Add data for a new post"""
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        post_data = {
            'timestamp': timestamp,
            'platform': platform,
            'post_type': post_type,
            'engagement_rate': engagement_rate,
            'reach': reach
        }
        self.data['posts'].append(post_data)
    
    def calculate_metrics(self):
        """Calculate key performance metrics"""
        df = pd.DataFrame(self.data['posts'])
        if len(df) == 0:
            return {}
        
        metrics = {
            'total_posts': len(df),
            'average_engagement': df['engagement_rate'].mean(),
            'total_reach': df['reach'].sum(),
            'platform_breakdown': df.groupby('platform').size().to_dict(),
            'best_performing_platform': df.groupby('platform')['engagement_rate'].mean().idxmax()
        }
        return metrics
    
    def generate_report(self):
        """Generate a performance report"""
        metrics = self.calculate_metrics()
        if not metrics:
            return "No data available for analysis"
        
        report = f"""
Social Media Performance Report
=============================
Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

Key Metrics:
- Total Posts: {metrics['total_posts']}
- Average Engagement Rate: {metrics['average_engagement']:.2f}%
- Total Reach: {metrics['total_reach']:,}
- Best Performing Platform: {metrics['best_performing_platform']}

Platform Breakdown:
"""
        for platform, count in metrics['platform_breakdown'].items():
            report += f"- {platform}: {count} posts\n"
        
        return report

# Example usage
if __name__ == "__main__":
    analytics = SocialMediaAnalytics()
    
    # Sample data
    analytics.add_post_data('Instagram', 'image', 4.5, 1000)
    analytics.add_post_data('Facebook', 'video', 3.2, 800)
    analytics.add_post_data('YouTube', 'video', 5.1, 1500)
    
    # Generate and print report
    print(analytics.generate_report()) 