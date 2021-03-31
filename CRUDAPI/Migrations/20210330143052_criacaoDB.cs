using Microsoft.EntityFrameworkCore.Migrations;

namespace CRUDAPI.Migrations
{
    public partial class criacaoDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pessoas",
                columns: table => new
                {
                    PessoaID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SobreNome = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Idade = table.Column<int>(type: "int", nullable: false),
                    Profissao = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pessoas", x => x.PessoaID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pessoas");
        }
    }
}
