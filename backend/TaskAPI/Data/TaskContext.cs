using Microsoft.EntityFrameworkCore;
using TaskAPI.Models;

namespace TaskAPI.Data
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options)
        {
        }

        public DbSet<TaskItem> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TaskItem>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Title).IsRequired().HasMaxLength(200);
                entity.Property(e => e.Description).HasMaxLength(1000);
                entity.Property(e => e.CreatedAt).IsRequired();
            });

            // Seed data
            modelBuilder.Entity<TaskItem>().HasData(
                new TaskItem { Id = 1, Title = "Tarea de ejemplo", Description = "Esta es una tarea de ejemplo", IsCompleted = false },
                new TaskItem { Id = 2, Title = "Completar proyecto", Description = "Finalizar el proyecto de CRUD de tareas", IsCompleted = false }
            );
        }
    }
}