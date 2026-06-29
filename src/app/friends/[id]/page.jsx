import ButtonAction from "@/components/ButtonAction";
import Image from "next/image";

const ContactDetail = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://b13-a07-az.vercel.app/Data.json", { cache: "no-store" });
  const datas = await res.json();
  const friendDetails = datas.find((friend) => friend.id === parseInt(id));

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
        {/*
          Layout (matches screenshot):
          ┌────────────────┬──────────┬──────────┬──────────┐
          │  Profile Card  │  Days    │  Goal    │ Next Due │  row 1
          │  col-span-3    │          │          │          │
          ├────────────────┼──────────────────────────────  │
          │  Snooze        │  Relationship Goal             │  row 2
          ├────────────────┤                                │
          │  Archive       ├────────────────────────────────┤
          ├────────────────┤  Quick Check-In                │  row 3
          │  Delete        │  (Call · Text · Video)         │
          └────────────────┴────────────────────────────────┘

          grid-cols-[2fr_1fr_1fr_1fr]  → 4 columns
          Profile card:  col-span-1 (left col)
          Stats row:     col-span-3 (right 3 cols) — inner grid-cols-3
          Action btns:   col-span-1 rows 2-3
          Goal + QCI:    col-span-3 rows 2-3
        */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] grid-rows-[auto_auto_auto] gap-4 w-full max-w-5xl">

          {/* ── Row 1, Col 1 — Profile Card ── */}
          <div className="col-span-1 row-span-1 bg-white rounded-2xl p-8 flex flex-col items-center gap-3 shadow-sm">
            <Image
              src={friendDetails.picture}
              alt={friendDetails.name}
              width={100}
              height={100}
              className="w-20 h-20 rounded-full object-cover border-4 border-gray-100"
            />
            <p className="font-semibold text-gray-900 text-lg text-center">{friendDetails.name}</p>
            <div className="flex flex-col items-center gap-2">
              <span className="bg-red-500 text-white text-xs font-semibold px-4 py-1 rounded-full capitalize">
                {friendDetails.status}
              </span>
              {friendDetails.tags?.map((tag) => (
                <span key={tag} className="bg-green-100 text-green-700 text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-400 italic text-sm text-center">"{friendDetails.bio}"</p>
            <p className="text-gray-400 text-sm">Preferred: email</p>
          </div>

          {/* ── Row 1, Cols 2-4 — Stats (3 cards) ── */}
          {[
            { value: friendDetails.days_since_contact, label: "Days Since Contact", big: true },
            { value: friendDetails.goal, label: "Goal (Days)", big: true },
            { value: new Date(friendDetails.next_due_date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }), label: "Next Due", big: false },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-2 shadow-sm">
              <span className={`font-semibold text-emerald-800 leading-tight text-center ${stat.big ? "text-4xl" : "text-xl"}`}>
                {stat.value}
              </span>
              <span className="text-gray-400 text-sm text-center">{stat.label}</span>
            </div>
          ))}

          {/* ── Rows 2-3, Col 1 — Action Buttons ── */}
          <div className="col-start-1 row-start-6 row-end-2 flex flex-col gap-3">
            {[
              { label: "Snooze 2 Weeks", icon: "🔔", danger: false },
              { label: "Archive", icon: "🗄️", danger: false },
              { label: "Delete", icon: "🗑️", danger: true },
            ].map((action, i) => (
              <button
                key={i}
                className={`bg-white border border-gray-200 rounded-2xl py-4 px-6 text-sm font-medium flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition-colors cursor-pointer ${action.danger ? "text-red-500" : "text-gray-700"}`}
              >
                <span>{action.icon}</span> {action.label}
              </button>
            ))}
          </div>

          {/* ── Row 2, Cols 2-4 — Relationship Goal ── */}
          <div className="col-start-2 col-end-5 row-start-2 bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="font-semibold text-gray-900 text-base">Relationship Goal</p>
              <button className="border border-gray-200 rounded-lg px-4 py-1 text-sm text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
                Edit
              </button>
            </div>
            <p className="text-gray-500 text-sm">
              Connect every <strong className="text-gray-900">{friendDetails.goal} days</strong>
            </p>
          </div>

          {/* ── Row 3, Cols 2-4 — Quick Check-In (your ButtonAction) ── */}
          <div className="col-start-2 col-end-5 row-start-3">
            <ButtonAction friendName={friendDetails.name} />
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactDetail;