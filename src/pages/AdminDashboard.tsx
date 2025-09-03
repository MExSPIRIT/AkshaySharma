import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  Users, 
  Mail, 
  Calendar, 
  Eye, 
  Trash2, 
  LogOut,
  RefreshCw,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Message {
  _id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: string;
}

interface Stats {
  total: number;
  unread: number;
  today: number;
  thisWeek: number;
}

const AdminDashboard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, unread: 0, today: 0, thisWeek: 0 });
  const [loading, setLoading] = useState(true);
  const [adminInfo, setAdminInfo] = useState<any>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const admin = localStorage.getItem('adminInfo');
    
    if (!token || !admin) {
      navigate('/admin/login');
      return;
    }

    setAdminInfo(JSON.parse(admin));
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      
      // Fetch messages and stats in parallel
      const [messagesRes, statsRes] = await Promise.all([
        fetch('/api/messages', {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch('/api/messages/stats', {
          headers: { Authorization: `Bearer ${token}` }
        })
      ]);

      if (messagesRes.ok && statsRes.ok) {
        const messagesData = await messagesRes.json();
        const statsData = await statsRes.json();
        
        setMessages(messagesData.data.messages);
        setStats(statsData.data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load dashboard data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (messageId: string) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/messages/${messageId}/read`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.ok) {
        setMessages(prev => 
          prev.map(msg => 
            msg._id === messageId ? { ...msg, read: true } : msg
          )
        );
        setStats(prev => ({ ...prev, unread: prev.unread - 1 }));
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to mark message as read",
        variant: "destructive",
      });
    }
  };

  const deleteMessage = async (messageId: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/messages/${messageId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.ok) {
        setMessages(prev => prev.filter(msg => msg._id !== messageId));
        setStats(prev => ({ 
          ...prev, 
          total: prev.total - 1,
          unread: prev.unread - (messages.find(m => m._id === messageId)?.read === false ? 1 : 0)
        }));
        
        toast({
          title: "Success",
          description: "Message deleted successfully",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete message",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    navigate('/admin/login');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-card to-background flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-lg border-b border-primary/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="font-orbitron text-xl font-bold text-gradient">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Portfolio Message Management
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {adminInfo?.name}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="glass-effect border-primary/30"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 glass-effect border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Messages</p>
                <p className="text-2xl font-bold text-foreground">{stats.total}</p>
              </div>
              <MessageSquare className="h-8 w-8 text-primary" />
            </div>
          </Card>

          <Card className="p-6 glass-effect border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Unread</p>
                <p className="text-2xl font-bold text-foreground">{stats.unread}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-orange-500" />
            </div>
          </Card>

          <Card className="p-6 glass-effect border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today</p>
                <p className="text-2xl font-bold text-foreground">{stats.today}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
          </Card>

          <Card className="p-6 glass-effect border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-2xl font-bold text-foreground">{stats.thisWeek}</p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
          </Card>
        </div>

        {/* Messages List */}
        <Card className="p-8 glass-effect border-primary/20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-orbitron text-2xl font-bold text-foreground">
              Messages
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={fetchData}
              className="glass-effect border-primary/30"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>

          {messages.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">No messages yet</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <Card
                  key={message._id}
                  className={`p-6 glass-effect border-primary/20 cursor-pointer transition-all duration-200 hover:border-primary/40 ${
                    !message.read ? 'border-l-4 border-l-primary bg-primary/5' : ''
                  }`}
                  onClick={() => markAsRead(message._id)}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-orbitron font-semibold text-foreground">
                            {message.name}
                          </h4>
                          <p className="text-sm text-primary hover:text-secondary transition-colors">
                            {message.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(message.createdAt)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {message.read ? (
                            <Badge variant="secondary" className="text-xs">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Read
                            </Badge>
                          ) : (
                            <Badge variant="default" className="text-xs">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              Unread
                            </Badge>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteMessage(message._id);
                            }}
                            className="text-red-500 hover:text-red-700 hover:bg-red-500/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pl-13">
                      <p className="font-inter text-muted-foreground leading-relaxed">
                        {message.message}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
